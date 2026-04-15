import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { GraduationCap, Send, CheckCircle } from "lucide-react";

const APPS_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";

const Register = () => {
  const [form, setForm] = useState({
    studentName: "",
    className: "",
    phoneNumber: "",
    school: "",
    city: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.studentName || !form.className || !form.phoneNumber || !form.school || !form.city) {
      toast({ title: "Missing fields", description: "Please fill all fields before submitting.", variant: "destructive" });
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
          phoneNumber: form.phoneNumber,
          school: form.school,
          city: form.city,
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

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center bg-secondary pt-20">
          <div className="text-center max-w-md mx-auto px-4">
            <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl font-heading font-bold text-foreground mb-3">You're Registered!</h2>
            <p className="font-body text-foreground/70 mb-8">
              Thank you for registering for Bhavishya Jyoti Samman 2026. We'll be in touch soon with further details.
            </p>
            <a href="/" className="gradient-cta inline-flex items-center gap-2 text-primary-foreground font-body font-semibold px-8 py-3 rounded-full shadow-cta hover:opacity-90 transition-opacity">
              Back to Home
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-secondary pt-24 pb-16">
        <div className="container max-w-xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
              <GraduationCap className="w-5 h-5 text-primary" />
              <span className="text-sm font-body font-semibold text-primary">Student Registration</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-3">
              Register Now
            </h1>
            <p className="font-body text-foreground/70">
              Fill in your details below to register for Bhavishya Jyoti Samman 2026
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-card border border-border space-y-6">
            <div className="space-y-2">
              <Label htmlFor="studentName" className="font-body font-medium text-foreground">Student Name</Label>
              <Input
                id="studentName"
                placeholder="Enter your full name"
                value={form.studentName}
                onChange={(e) => handleChange("studentName", e.target.value)}
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="className" className="font-body font-medium text-foreground">Class</Label>
              <Select value={form.className} onValueChange={(v) => handleChange("className", v)}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select your class" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10th">10th</SelectItem>
                  <SelectItem value="12th">12th</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phoneNumber" className="font-body font-medium text-foreground">Phone Number</Label>
              <Input
                id="phoneNumber"
                type="tel"
                placeholder="Enter your phone number"
                value={form.phoneNumber}
                onChange={(e) => handleChange("phoneNumber", e.target.value)}
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="school" className="font-body font-medium text-foreground">School</Label>
              <Input
                id="school"
                placeholder="Enter your school name"
                value={form.school}
                onChange={(e) => handleChange("school", e.target.value)}
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="city" className="font-body font-medium text-foreground">City</Label>
              <Input
                id="city"
                placeholder="Enter your city"
                value={form.city}
                onChange={(e) => handleChange("city", e.target.value)}
                className="h-12"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 gradient-cta text-primary-foreground font-body font-semibold text-lg rounded-full shadow-cta hover:opacity-90 transition-opacity border-0"
            >
              {loading ? "Submitting..." : (
                <>Submit Registration <Send className="w-4 h-4 ml-1" /></>
              )}
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
