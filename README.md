# Office ToolsPro (Android/iOS App)

This repository is now configured as a **React Native Expo mobile app** (not just a web mock).

## What this means
- ✅ Runs as a mobile app on **Android**
- ✅ Runs as a mobile app on **iOS**
- ✅ Uses native React Native UI components

## Run locally
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start Expo:
   ```bash
   npm run start
   ```
3. Open on device/emulator:
   - Android: press `a` in Expo CLI or scan QR with Expo Go
   - iOS: press `i` in Expo CLI (macOS) or scan QR with Expo Go

## Build outputs
- Android build command:
  ```bash
  npm run android
  ```
- iOS build command:
  ```bash
  npm run ios
  ```

## Play Store / App Store publishing
This codebase is mobile-ready, but store publishing still requires store accounts:
- Google Play Console: one-time fee ($25)
- Apple Developer Program: yearly fee

## Notes on ads
Current banners are UI placeholders (`Ad Banner Here`).
For real app ads (AdMob), integrate `react-native-google-mobile-ads` in a follow-up change.
