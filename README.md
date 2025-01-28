# Authenticator App

## Overview
The **Authenticator App** is a React Native-based mobile application that provides user authentication functionality. It features login and signup screens with email and password validation. The app is built using Context API for global state management, and the project is set up with CI/CD pipelines.

## Features
- **Authentication Screens**: Login and signup screens with validation for email and password fields.
- **State Management**: Context API is used for global state management.
- **Validation**:
  - Email validation ensures proper formatting.
  - Password validation ensures minimum length requirements.
- **Enhancements**: Future scope includes integration with Google Firebase for user authentication.

---

## **Local Setup**

### **Prerequisites**
Ensure the following are installed on your system:
- Node.js (v16 or later)
- npm (Node Package Manager)
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

### **Steps to Run Locally**
1. Clone the repository:
   ```bash
   git clone https://github.com/RishieVyas/Authenticator.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Authenticator
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the application:
   - For Android:
     ```bash
     npm run android
     ```
   - For iOS:
     ```bash
     npm run ios
     ```

5. The app will launch on the selected device/emulator.

---

## **Dependencies**
The following are the key dependencies used in this project:

### **Production Dependencies**
- **react**: `18.3.1` - Core library for building the UI.
- **react-native**: `0.76.6` - Framework for building native mobile apps using React.
- **@react-navigation/native**: `7.0.14` - Library for handling in-app navigation.
- **@react-navigation/native-stack**: `7.2.0` - Navigation stack for the app.

### **Development Dependencies**
- **jest**: `^29.7.0` - Testing framework.
- **@testing-library/react-native**: `^12.1.0` - Testing library for React Native components.
- **@testing-library/jest-native**: `^5.0.0` - Jest matchers for React Native testing.
- **@babel/preset-env**: `^7.26.7` - Babel preset for compiling ES6+ code.
- **@babel/preset-react**: `^7.26.3` - Babel preset for JSX transformation.
- **metro-react-native-babel-preset**: Babel preset for React Native projects.

---

## **CI/CD Setup**
The CI/CD pipeline is implemented using **GitHub Actions** to automate testing, linting, and build generation for Android and iOS platforms.

### **Tools Used**
- **GitHub Actions**: Automates workflows for continuous integration and deployment.
- **npm**: For installing dependencies and running scripts.
- **Gradle**: For building Android APKs.
- **Xcode Command-Line Tools**: For building iOS apps.

### **CI/CD Workflow**
The workflow triggers on `push` events to the `main` branch.

#### **Pipeline Steps**
1. **Lint and Test**:
   - Runs ESLint to check for code quality.
   - Executes Jest tests to ensure the app works as expected.

2. **Build Android APK**:
   - Builds a release APK using Gradle.
   - Uses secrets for signing the APK.

3. **Build iOS App**:
   - Builds an iOS app using Xcode.

#### **GitHub Actions Configuration**
The `.github/workflows/ci-cd.yml` file contains the following steps:

```yaml
name: React Native CI/CD

on:
  push:
    branches:
      - main

jobs:
  lint-and-test:
    name: Lint and Test
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 16

      - name: Install Dependencies
        run: npm install

      - name: Lint Code
        run: npm run lint

      - name: Run Tests
        run: npm test

  build-android:
    name: Build Android APK
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 16

      - name: Install Dependencies
        run: npm install

      - name: Build APK
        run: |
          cd android
          ./gradlew assembleRelease
        env:
          ANDROID_KEYSTORE: ${{ secrets.ANDROID_KEYSTORE }}
          ANDROID_KEYSTORE_PASSWORD: ${{ secrets.ANDROID_KEYSTORE_PASSWORD }}
          ANDROID_KEY_ALIAS: ${{ secrets.ANDROID_KEY_ALIAS }}
          ANDROID_KEY_PASSWORD: ${{ secrets.ANDROID_KEY_PASSWORD }}

  build-ios:
    name: Build iOS App
    runs-on: macos-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 16

      - name: Install Dependencies
        run: npm install

      - name: Build iOS App
        run: |
          cd ios
          xcodebuild -workspace BlockHouse.xcworkspace -scheme BlockHouse -sdk iphoneos -configuration AppStoreDistribution archive -archivePath $PWD/build/BlockHouse.xcarchive
```

---

## **Future Enhancements**
- **Firebase Authentication**: Implement user authentication using Google Firebase.
- **Enhanced CI/CD**: Add deployment steps to distribute the app directly to TestFlight (iOS) and Play Store (Android).

---