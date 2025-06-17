# 📱 React Native GitHub OAuth App

This is a React Native project that integrates GitHub OAuth login and demonstrates modern state and data fetching strategies with secure storage and optimized image rendering.

---

## ⚙️ Setup Instructions

### 1. Create a GitHub OAuth App

1. Go to [GitHub Developer Settings](https://github.com/settings/developers).
2. Click on **OAuth Apps** > **New OAuth App**.
3. Fill in the form:
   - **Application name**: e.g. `My RN GitHub App`
   - **Homepage URL**: e.g. `https://githubanalytics.com`
   - **Authorization callback URL**: put it to `com.githubanalytics://oauthredirect`
4. Click **Register application**.
5. Copy the **Client ID** and **Client Secret** (⚠️ the secret is shown only once, save it securely).

---

### 2. Add GitHub Credentials

Open the file `src/utils/githubAuthService.ts` and replace the placeholder values with your GitHub OAuth credentials you've got from above:

### 3. Install Dependencies

To install all required packages, run:

```bash
yarn
```

### 4. Run the Application

To launch on iOS, run:

```
yarn i
```

To launch on Android, run:

```
yarn a
```

### 5. Run Tests

```
yarn test
```

## 📦 Libraries Used and Why

### ✅ Zustand

Zustand is used for global and local state management. It was chosen because:

- It has a **minimal and straightforward API**
- Requires **no boilerplate**
- **Avoids unnecessary re-renders** through selective subscriptions
- Provides **great TypeScript support**
- Works well for both small and large apps

---

### ✅ React Native Keychain

React Native Keychain is used to securely store sensitive credentials (like the GitHub access token). It was selected over alternatives because:

- It’s generally **faster** than other secure storage libraries
- Supports **biometric authentication** (Face ID, Touch ID) (for future scalability)
- Provides **secure, platform-native keychain access**
- Has **broad community support** and stable maintenance

---

### ✅ react-native-fast-image

This library is used instead of React Native’s built-in `<Image />` component because:

- It offers **memory and disk caching** out of the box
- **Improves image loading speed**, especially on Android
- Supports **priority loading**, **custom headers**, and **preloading**
- Provides a **smoother and more performant user experience**

---

### ✅ RTK Query or SWR (Recommended for Future Integration)

Although not yet integrated, using **RTK Query** or **SWR** is highly recommended for managing API calls. These libraries provide:

- **Automatic caching** and **data synchronization**
- Built-in **loading**, **success**, and **error** state handling
- Support for **optimistic updates**, **polling**, and **retry logic**
- **Reduced boilerplate** with modern React hook APIs
- **Improved developer experience** and scalability
