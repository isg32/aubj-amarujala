# Bhavishya Jyoti Samman 2026 — Amar Ujala

A landing & registration website for the **Amar Ujala Bhavishya Jyoti (AUBJ) Samman 2026** event, celebrating Class 10th & 12th toppers across UP, Uttarakhand, Haryana, Himachal Pradesh and J&K.

Built with **React + Vite + TypeScript + Tailwind + shadcn/ui**.

---

## 1. Local Development

```bash
# install dependencies
npm install

# run the dev server
npm run dev
```

The app will start on `http://localhost:5173`.

### Project structure

```
src/
├── assets/                  # banner, logo, event imagery
├── components/
│   ├── HeroSection.tsx      # hero + embedded RegistrationForm
│   ├── RegistrationForm.tsx # shared form (used in hero & /register)
│   ├── Navbar.tsx, Footer.tsx, AboutSection.tsx, ...
├── lib/
│   └── registrationData.ts  # states & dynamic district lists
└── pages/
    ├── Index.tsx            # home page
    └── Register.tsx         # full-page registration
google_apps_script.gs        # backend script for Google Sheets
```

---

## 2. Form Fields Captured

The registration form (rendered both on the hero and at `/register`) collects:

| Section | Field | Notes |
| --- | --- | --- |
| Basic | Full Name | required, max 100 chars |
| Basic | Class | dropdown — `10th` / `12th` |
| Academic | Stream | required only when Class = 12th (PCM / PCB / Commerce / Arts) |
| Academic | School Name | required |
| Academic | Board | optional — CBSE / ICSE / State Board |
| Contact | Mobile Number | exact 10 digits, numeric only |
| Contact | Email | optional, validated format |
| Location | State | UP / UK / HR / HP / J&K |
| Location | District | dynamic dropdown based on selected state |
| Performance | Pre-Board Percentage | 0–100 |
| Performance | Expected Board Score | 0–100 |
| Consent | "Information is accurate" | required checkbox |
| Consent | "Agree to T&C and communications" | required checkbox |

All submissions are POSTed as JSON (`mode: "no-cors"`) to a Google Apps Script Web App that appends them to a Google Sheet.

---

## 3. Backend Setup — Google Sheets + Apps Script

### Step 1 — Create the Sheet
1. Go to <https://sheets.new> and name it e.g. **AUBJ Registrations 2026**.
2. Leave it blank — the script auto-creates the `Registrations` tab and headers.

### Step 2 — Add the Apps Script
1. In the sheet: **Extensions → Apps Script**.
2. Delete the boilerplate `Code.gs` content.
3. Open `google_apps_script.gs` from this repo and **paste its full contents**.
4. **Save** (💾) and name the project (e.g. `AUBJ Backend`).

### Step 3 — Deploy as a Web App
1. Click **Deploy → New deployment**.
2. Click the gear icon → choose **Web app**.
3. Configure:
    - **Description:** `AUBJ Registrations v1`
    - **Execute as:** `Me (your@gmail.com)`
    - **Who has access:** `Anyone` *(must be Anyone, not "Anyone with Google account")*
4. Click **Deploy**, authorize the script, and **copy the Web App URL**. It looks like:
   ```
   https://script.google.com/macros/s/AKfyc..../exec
   ```

### Step 4 — Wire the Frontend
Open `src/components/RegistrationForm.tsx` and replace the placeholder:

```ts
const APPS_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";
```

with your copied Web App URL. Save — submissions will now land in the sheet.

### Step 5 — Test End-to-End
1. Run `npm run dev`, open the home page.
2. Fill the form on the right of the hero and submit.
3. Refresh the Google Sheet → a new row should appear with all 14 columns.

> ℹ️ Because the request uses `mode: "no-cors"`, the browser cannot read the response. The script still receives and stores the data; success is confirmed by the row appearing in the sheet.

### Updating the script later
Any edit requires a **new version**: **Deploy → Manage deployments → ✏️ Edit → Version: New version → Deploy**. The URL stays the same.

---

## 4. Failsafe Features in `google_apps_script.gs`

- ✅ Auto-creates the sheet & header row on first run.
- ✅ `LockService` prevents concurrent writes from corrupting rows.
- ✅ Sanitizes input length (500 char cap) and prefixes `= + - @` to block formula injection.
- ✅ Tolerant parser — accepts JSON body or form-encoded params.
- ✅ `doGet` returns a JSON heartbeat for quick verification.

---

## 5. Deployment

### Lovable
Open the [Lovable Project](https://lovable.dev) → **Share → Publish**.

### Manual (Vercel / Netlify / static host)
```bash
npm run build
# deploy the `dist/` folder
```

`vercel.json` is preconfigured for SPA routing.

---

## 6. Routes

| Path | Page |
| --- | --- |
| `/` | Home (hero with embedded form, about, eligibility, etc.) |
| `/register` | Full-page registration |
| `*` | 404 |

---

## 7. Troubleshooting

| Problem | Fix |
| --- | --- |
| Submissions not arriving | Re-deploy script and ensure access = **Anyone**. Confirm URL was updated in `RegistrationForm.tsx`. |
| `Authorization required` on first deploy | Click **Review permissions** → choose your account → **Advanced → Go to project (unsafe) → Allow**. |
| District list empty | Select a state first; districts load dynamically from `src/lib/registrationData.ts`. |
| Phone field rejecting input | Only digits are accepted, capped at 10 characters. |
