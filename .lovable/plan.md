## Plan: Fire Meta Pixel event on successful registration

### Goal
Fire a Meta Pixel conversion event when the user reaches the Thank You screen (after a successful form submission), in addition to the existing sitewide `PageView`.

### Change
In `src/components/RegistrationForm.tsx`, inside the existing `useEffect` that runs when `submitted` becomes `true` (currently fires confetti), also call:

```ts
if (typeof window !== "undefined" && (window as any).fbq) {
  (window as any).fbq("track", "CompleteRegistration");
}
```

This uses the standard Meta Pixel event `CompleteRegistration`, which is the recommended event name for form sign-ups and registrations. It will appear in Meta Events Manager as a trackable conversion.

### Why this approach
- The pixel base code is already loaded sitewide via `index.html`, so `fbq` is globally available.
- Firing inside the `submitted` effect guarantees it only triggers once, after a successful submit (matches the Thank You screen render).
- No duplicate `PageView` — only the conversion event is added.

### Verification
- Submit the form → Meta Pixel Helper shows `CompleteRegistration` firing on the Thank You screen.
- Network tab shows a request to `facebook.com/tr?...&ev=CompleteRegistration`.
- Events Manager → Test Events shows the event arriving.

### Optional (let me know)
If you'd prefer a custom event name (e.g. `Lead`, or a custom `BhavishyaJyotiRegistration`) instead of `CompleteRegistration`, tell me and I'll swap it in.
