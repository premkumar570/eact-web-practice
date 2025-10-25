# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Running the Application
```bash
npm start
```
Starts the development server at http://localhost:3000 with hot reload enabled.

### Building for Production
```bash
npm run build
```
Creates optimized production build in the `build/` folder.

### Running Tests
```bash
npm test
```
Launches the test runner in interactive watch mode.

### Running a Single Test File
```bash
npm test -- ComponentName.test.js
```

## Project Architecture

### Overview
This is a Create React App-based practice project built with React 19.2 and React Router DOM 7.9. It's a dashboard application demonstrating page-based routing and component composition patterns.

### Key Architectural Decisions

**No Global State Management**: The application uses local component state only (React hooks). All data is hardcoded/mocked within components. There is no Redux, Context API, or other state management library.

**No Authentication**: The login form at `/` accepts any non-empty credentials and navigates to `/dashboard`. There is no authentication context, token storage, or route protection.

**Page + Component Model**:
- `/src/pages/` contains full-screen route components (Login, Dashboard, Members)
- `/src/components/` contains reusable UI components (Header, Sidebar, User)
- Data flows from pages to components via props (props drilling pattern)

### Routing Structure
- `/` → Login page (entry point)
- `/dashboard` → Main dashboard with stats grid, team members, and activity feed
- `/members` → Extended member management page with 12 users
- `*` → Redirects to `/` (catch-all)

All routes are accessible without authentication. Sidebar menu has additional items (Analytics, Reports, Settings, Tasks) that all point to `/dashboard` - these routes are not yet implemented.

### Data Patterns

**Data Duplication**: The Dashboard and Members pages both define similar user arrays locally (6 vs 12 users). This is intentional for the practice project but represents an opportunity to extract into a custom hook like `useUsers()`.

**Hardcoded Configuration**: Sidebar menu items, stats data, activity items, and user lists are all hardcoded JavaScript objects/arrays within components.

**External Services**: User avatars pull from `pravatar.cc` and use `ui-avatars.com` as fallback for avatar generation.

### Component Communication

**Sidebar Navigation**: Uses `useNavigate()` from react-router-dom for client-side routing. Logout navigates to `/` (Login page).

**User Component**: Receives props (name, email, image, role, status) and is reused in both Dashboard and Members pages. Uses CSS classes for status indicators ('online', 'offline', 'busy').

**Header Component**: Currently static with hardcoded "Welcome, User" text - does not integrate with actual user data.

### Styling Approach
Plain CSS files (one per component/page). No CSS-in-JS, Tailwind, or CSS modules. Global styles in `index.css`, component-specific styles imported alongside components.

## Important Context

- **No API Integration**: All data is mocked. There are no fetch calls, API endpoints, or backend services.
- **No Tests Written**: Test infrastructure exists (`setupTests.js`, `@testing-library` dependencies) but no actual tests are implemented.
- **React Keys**: Uses array index as keys in `.map()` functions, which is acceptable for static mock data but would need refactoring for dynamic data.
- **CRA Configuration**: Uses default Create React App setup with no custom webpack or Babel configuration. ESLint extends "react-app" configuration.
