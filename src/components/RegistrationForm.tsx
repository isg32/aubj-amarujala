import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { Send, Sparkles, PartyPopper } from "lucide-react";
import { STATES, DISTRICTS, type StateName } from "@/lib/registrationData";

// 🔧 Replace with the deployed Google Apps Script Web App URL
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzUPTiLTJg6l7lkzVjg5D_QD2NZtvILKZ7Ukmr8JX2lOv9ogR9TJD495yKQoA-65YIN/exec";

type FormState = {
  studentName: string;
  className: "" | "10th" | "12th";
  stream: string;
  school: string;
  board: string;
  phoneNumber: string;
  email: string;
  state: StateName | "";
  district: string;
  preBoardPercent: string;
  expectedScore: string;
  actualResult: string;
  consent: boolean;
};

const initialState: FormState = {
  studentName: "",
  className: "",
  stream: "",
  school: "",
  board: "",
  phoneNumber: "",
  email: "",
  state: "",
  district: "",
  preBoardPercent: "",
  expectedScore: "",
  actualResult: "",
  consent: false,
};

interface Props {
  variant?: "card" | "compact";
}

const RegistrationForm = ({ variant = "card" }: Props) => {
  const [form, setForm] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => {
      const next = { ...prev, [key]: value } as FormState;
      if (key === "state") next.district = "";
      if (key === "className" && value !== "12th") next.stream = "";
      return next;
    });
  };

  const validate = (): string | null => {
    if (!form.studentName.trim()) return "Please enter the student's full name.";
    if (!form.className) return "Please select a class.";
    if (form.className === "12th" && !form.stream) return "Please select a stream for Class 12th.";
    if (!form.school.trim()) return "Please enter the school name.";
    if (!/^\d{10}$/.test(form.phoneNumber)) return "Mobile number must be exactly 10 digits.";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "Please enter a valid email.";
    if (!form.state) return "Please select your state.";
    if (!form.district) return "Please select your district.";
    if (form.preBoardPercent) {
      const pre = Number(form.preBoardPercent);
      if (isNaN(pre) || pre < 0 || pre > 100) return "Pre-Board % must be between 0 and 100.";
    }
    if (form.expectedScore) {
      const exp = Number(form.expectedScore);
      if (isNaN(exp) || exp < 0 || exp > 100) return "Expected/Announced Board Score % must be between 0 and 100.";
    }
    if (form.actualResult) {
      const act = Number(form.actualResult);
      if (isNaN(act) || act < 0 || act > 100) return "Actual Result % must be between 0 and 100.";
    }
    if (!form.consent) return "Please provide your consent to proceed.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      toast({ title: "Please review the form", description: err, variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentName: form.studentName,
          class: form.className,
          stream: form.stream,
          school: form.school,
          board: form.board,
          phoneNumber: form.phoneNumber,
          email: form.email,
          state: form.state,
          district: form.district,
          preBoardPercent: form.preBoardPercent,
          expectedScore: form.expectedScore,
          actualResult: form.actualResult,
          consent: form.consent,
          submittedAt: new Date().toISOString(),
        }),
      });
      setSubmitted(true);
      toast({ title: "Registration Successful!", description: "Your details have been submitted." });
    } catch {
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const containerClass =
    variant === "card"
      ? "bg-card rounded-2xl p-5 sm:p-6 md:p-8 shadow-card border border-border"
      : "bg-card/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-cta border border-border";

  useEffect(() => {
    if (!submitted) return;
    const fire = (particleRatio: number, opts: confetti.Options) => {
      confetti({
        origin: { y: 0.6 },
        particleCount: Math.floor(200 * particleRatio),
        spread: 70,
        startVelocity: 35,
        colors: ["#dc2626", "#f59e0b", "#fbbf24", "#ffffff", "#7c3aed"],
        ...opts,
      });
    };
    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  }, [submitted]);

  if (submitted) {
    return (
      <div className={containerClass + " text-center relative overflow-hidden animate-scale-in"}>
        <div className="absolute inset-0 gradient-cta opacity-5 pointer-events-none" />
        <div className="relative">
          <div className="relative inline-block mb-4">
            <div className="absolute inset-0 gradient-cta rounded-full blur-xl opacity-50 animate-pulse" />
            <div className="relative w-20 h-20 rounded-full gradient-cta flex items-center justify-center mx-auto shadow-cta">
              <PartyPopper className="w-10 h-10 text-primary-foreground" />
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-accent animate-pulse" />
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">Congratulations!</h3>
            <Sparkles className="w-5 h-5 text-accent animate-pulse" />
          </div>
          <p className="font-body text-foreground/70 mb-4">
            You're officially registered for <strong className="text-primary">Bhavishya Jyoti 2026</strong>.
          </p>
          <p className="text-sm font-body text-foreground/60">
            Our team will reach out to you soon with further details. Get ready to shine! ✨
          </p>
        </div>
      </div>
    );
  }

  const districts = form.state ? DISTRICTS[form.state] : [];

  return (
    <form onSubmit={handleSubmit} className={containerClass + " space-y-4"}>
      <div className="text-center mb-2">
        <h3 className="text-2xl font-heading font-bold text-foreground">Register Now</h3>
        <p className="text-sm font-body text-foreground/60">Quick & free registration</p>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="studentName" className="text-sm">Full Name *</Label>
        <Input id="studentName" placeholder="Student's full name" value={form.studentName}
          onChange={(e) => set("studentName", e.target.value)} maxLength={100} />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <Label className="text-sm">Class *</Label>
          <Select value={form.className} onValueChange={(v) => set("className", v as FormState["className"])}>
            <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="10th">Class 10th</SelectItem>
              <SelectItem value="12th">Class 12th</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label className="text-sm">Board</Label>
          <Select value={form.board} onValueChange={(v) => set("board", v)}>
            <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="CBSE">CBSE</SelectItem>
              <SelectItem value="ICSE">ICSE</SelectItem>
              <SelectItem value="State Board">State Board</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {form.className === "12th" && (
        <div className="space-y-1.5">
          <Label className="text-sm">Stream *</Label>
          <Select value={form.stream} onValueChange={(v) => set("stream", v)}>
            <SelectTrigger><SelectValue placeholder="Select stream" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="Science (PCM)">Science (PCM)</SelectItem>
              <SelectItem value="Science (PCB)">Science (PCB)</SelectItem>
              <SelectItem value="Commerce">Commerce</SelectItem>
              <SelectItem value="Arts / Humanities">Arts / Humanities</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      <div className="space-y-1.5">
        <Label htmlFor="school" className="text-sm">School Name *</Label>
        <Input id="school" placeholder="School name" value={form.school}
          onChange={(e) => set("school", e.target.value)} maxLength={150} />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <Label htmlFor="phone" className="text-sm">Mobile (10 digits) *</Label>
          <Input id="phone" inputMode="numeric" placeholder="Enter your 10-digit mobile number"
            value={form.phoneNumber}
            onChange={(e) => set("phoneNumber", e.target.value.replace(/\D/g, "").slice(0, 10))}
            maxLength={10} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-sm">Email (optional)</Label>
          <Input id="email" type="email" placeholder="you@example.com" value={form.email}
            onChange={(e) => set("email", e.target.value)} maxLength={255} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <Label className="text-sm">State *</Label>
          <Select value={form.state} onValueChange={(v) => set("state", v as StateName)}>
            <SelectTrigger><SelectValue placeholder="Select state" /></SelectTrigger>
            <SelectContent>
              {STATES.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label className="text-sm">District *</Label>
          <Select value={form.district} onValueChange={(v) => set("district", v)} disabled={!form.state}>
            <SelectTrigger><SelectValue placeholder={form.state ? "Select" : "Pick state first"} /></SelectTrigger>
            <SelectContent className="max-h-60">
              {districts.map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <Label htmlFor="pre" className="text-sm">Announced Board Score %</Label>
          <Input id="pre" type="number" min={0} max={100} step="0.01" placeholder="e.g. 85"
            value={form.preBoardPercent} onChange={(e) => set("preBoardPercent", e.target.value)} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="exp" className="text-sm">Expected Score % (If final results are awaited)</Label>
          <Input id="exp" type="number" min={0} max={100} step="0.01" placeholder="e.g. 92"
            value={form.expectedScore} onChange={(e) => set("expectedScore", e.target.value)} />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="actual" className="text-sm">Actual Result %</Label>
        <Input id="actual" type="number" min={0} max={100} step="0.01" placeholder="e.g. 95"
          value={form.actualResult} onChange={(e) => set("actualResult", e.target.value)} />
      </div>

      <div className="pt-1">
        <label className="flex items-start gap-2 cursor-pointer">
          <Checkbox checked={form.consent}
            onCheckedChange={(v) => set("consent", v === true)} className="mt-0.5" />
          <span className="text-xs font-body text-foreground/80">
            I confirm that the information provided by me is true to the best of my knowledge. I give my consent for this information to be used for future communication purposes. I Agree.
          </span>
        </label>
      </div>

      <Button type="submit" disabled={loading}
        className="w-full h-12 gradient-cta text-primary-foreground font-body font-semibold rounded-full shadow-cta hover:opacity-90 transition-opacity border-0">
        {loading ? "Submitting..." : (<>Submit Registration <Send className="w-4 h-4 ml-1" /></>)}
      </Button>
    </form>
  );
};

export default RegistrationForm;
