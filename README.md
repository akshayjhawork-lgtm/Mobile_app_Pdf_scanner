# Office ToolsPro Design Replica

## How to test locally
1. Start a local server:
   ```bash
   python3 -m http.server 4173 --bind 127.0.0.1
   ```
2. Open in browser:
   - `http://127.0.0.1:4173`
3. Verify:
   - All 9 phone layouts are visible.
   - Each screen has a blue ad banner area at the bottom.

## Google Ads integration
This project now includes Google AdSense placeholders in all banner sections:
- Add your real publisher ID in `index.html` replacing:
  - `ca-pub-XXXXXXXXXXXXXXXX`
- Add your real ad slot replacing:
  - `1234567890`

> Important: AdSense will not serve production ads on localhost. Test on an approved domain.

## Play Store deployment (realistic requirements)
You cannot publish to Google Play completely free:
- Google Play Console requires a one-time **$25 developer registration fee**.

### Recommended path for this UI
Because this repo is static HTML/CSS, convert it into an Android app wrapper first (e.g., WebView, Capacitor, or Flutter WebView), then:
1. Build signed Android App Bundle (`.aab`).
2. Create Play Console app listing.
3. Complete Data safety, content rating, privacy policy.
4. Upload `.aab` and submit for review.

If you want, I can create the Android WebView wrapper in this repo next so you can generate a Play Store-ready AAB.
