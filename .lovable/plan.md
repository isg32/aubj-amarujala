## Plan: Add Meta Pixel sitewide via `index.html`

### 1. Edit `index.html`
Add the Meta Pixel `<script>` block inside `<head>`, just before `</head>`. This ensures the pixel is present in the raw HTML served by the server, so it will be visible in **View Source** after build.

```html
<!-- Meta Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '2149563492511903');
  fbq('track', 'PageView');
</script>
<!-- End Meta Pixel Code -->
```

### 2. Add `<noscript>` fallback at top of `<body>`
Per Lovable's HTML5 constraint, `<noscript>` containing `<img>` cannot be placed inside `<head>`. I'll put it at the very top of `<body>` (functionally identical to Meta's snippet):

```html
<noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=2149563492511903&ev=PageView&noscript=1"
/></noscript>
```

### 3. Remove duplicate dynamic injection in `RegistrationForm.tsx`
The existing `useEffect` block that loads `fbevents.js` and fires `PageView` on the Thank You screen would now double-fire (once sitewide from `index.html`, once again on submission). I'll remove:
- The IIFE that loads `fbevents.js`
- The `fbq("init", ...)` and `fbq("track", "PageView")` calls
- The programmatic `<noscript>` injection

I'll keep the `useEffect` itself for the confetti animation (which still needs to fire on the Thank You screen).

### Verification after deploy
- **View Source** (Ctrl+U) on any page → you'll now see the Meta Pixel script and noscript tags in the raw HTML ✅
- **Meta Pixel Helper** Chrome extension → icon lights up on every page, showing pixel `2149563492511903` firing `PageView`
- **Network tab** → `fbevents.js` and `facebook.com/tr?id=2149563492511903...` load on every page

Approve and I'll switch to default mode and apply the changes.