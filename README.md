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

### What I've Implemented

This app is a React Native GitHub Analytics tool built with TypeScript. It includes secure GitHub OAuth authentication, stores the token using secure keychain storage, and fetches real-time user data. The main feature implemented is a dashboard that displays user repositories, organizations, and key stats using clean architecture and scalable patterns. The app also includes tested components, optimized rendering (e.g., FlatList performance), and maintains a responsive UI across devices.

### How I Would Expand the App Given More Time

Given additional time, I would focus on both feature growth and performance optimization. The app would be enhanced with more comprehensive analytics, such as visual charts for commits, issues, and pull requests over time to improve insights. To support this, I’d introduce animated chart transitions for a smooth and intuitive experience.

On the performance side, I would perform detailed testing of each screen under high load to monitor frame rate (FPS) drops and identify bottlenecks in rendering or data handling. This includes optimizing FlatList rendering with proper memoization, getItemLayout, and virtualization tuning, especially for large datasets. Prefetching critical images—like the user avatar and org logos—as soon as they're available would reduce UI blocking and improve perceived performance.

I’d add skeleton loaders for chart sections and lists while data is loading, and introduce smooth animations and transitions across the app for better UX. Additionally, I would implement a global toast system to handle success, error, or warning messages uniformly throughout the app.

From a polish and branding perspective, I’d also set up the app icon, splash screen, and improve navigation transitions to feel native and fluid. On the technical side, I’d refactor the architecture to support lazy loading of features, integrate SWR or RTK Query for better data caching and background refreshes, and expand test coverage with stress tests and e2e flows using Detox or Maestro.

### YHour architecture decisions that demonstrate scalability

The app is built using modular and feature-based structure whgich means each part of the app—like repositories, organizations, or charts—has its own folder with components, logic, and styles. This makes it easy to add new featres or update existing ones without breaking other parts of the app.

For state management, I chose zustant because it’s lightweight, simple to use, and works well with both small and large apps. It also helps reduce unnecessary re-renders and doesn’t require much boilerplate code.

API calls are handled through a single service layer. This keeps the logic for sending requests, handling errors, and managing tokens in one place, which is easier to test and maintain.

Navigation is set up using React Native Navigation with typescript support. This makes moving between screens safe and scalble, and it’s easy to add things like deep linking or custom modals in the future.

UI components are reused across the app and follow consistent styles. Styling is managed in a shared locatin, which helps keep the design clean and uniform.

### Trade-offs you made to meet the time constraints

To deliver the core features on time, I focused on building a solid foundation rather than implementing every possible detail. For example, I limited the testing to unit and component level, and skipped full end-to-end (e2e) tests for now. While the architecture supports it, animations and chart transitions were kept minimal to prioritize stability and performance.

I also chose to implement only one main feature (repository stats) instead of trying to cover all areas of GitHub data. This allowed me to polish the main screen, ensure good performance, and build reusable components that can be extended later.

Sme advanced optimizations like background sync, deep linking, and full error boundary cverage were planned but postponed.
