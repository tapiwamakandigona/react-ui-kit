<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=200&section=header&text=React%20UI%20Kit&fontSize=50&animation=fadeIn&fontAlignY=38&desc=Zero-Dependency%20Component%20Library&descAlignY=51&descAlign=62" />
</div>

<h1 align="center">React UI Component Library (TypeScript)</h1>

<div align="center">
  <p><strong>A minimal, zero-dependency React component library with dark theme support, full TypeScript typings, and Jest test coverage.</strong></p>
  
  <p>
    <img src="https://img.shields.io/github/languages/top/tapiwamakandigona/react-ui-kit?style=for-the-badge&color=blue" alt="Top Language" />
    <img src="https://img.shields.io/github/last-commit/tapiwamakandigona/react-ui-kit?style=for-the-badge&color=green" alt="Last Commit" />
  </p>
</div>

---

## ⚡ Why Zero Dependencies?

Most UI libraries ship megabytes of CSS frameworks and peer dependencies. This library has **zero runtime dependencies** — every component is built from inline styles and React primitives, giving you total control over bundle size.

## 🧩 Components

| Component | Props API | Features |
|-----------|----------|----------|
| **Accordion** | `items`, `allowMultiple`, `defaultOpen` | Expandable sections, multi-open support |
| **Avatar** | `name`, `src`, `size`, `color` | Image display or initials fallback |
| **Badge** | `variant`, `size` | 4 color variants (default/success/warning/danger), 2 sizes |
| **Button** | `variant`, `size`, `disabled`, `loading`, `fullWidth` | 4 variants, 3 sizes, built-in loading spinner |
| **Card** | `padding`, `hover`, `onClick`, `style` | Flexible content container, clickable support |
| **Dropdown** | `options`, `value`, `onChange`, `placeholder` | Searchable select, keyboard-dismissable |
| **Input** | `label`, `error`, `hint`, `type` | Validation states, forwarded ref, dark mode |
| **Modal** | `open`, `onClose`, `title`, `width` | ESC key close, backdrop click, body scroll lock |
| **Progress** | `value`, `max`, `size`, `color`, `striped`, `animated` | Animated/striped progress bars, labels |
| **Skeleton** | `variant`, `count`, `width`, `height` | Shimmer loading placeholders (text/circular/rectangular) |
| **Spinner** | `size`, `color` | Customizable SVG loading spinner |
| **Switch** | `checked`, `onChange`, `label`, `size` | Toggle switch, 3 sizes, accessible `role="switch"` |
| **Tabs** | `tabs`, `defaultTab`, `variant` | 3 variants (default/pills/underline), accessible roles |
| **Toast** | `message`, `type`, `duration` | Context-based provider, auto-dismiss, stacking |
| **Tooltip** | `content`, `position`, `delay` | 4 positions, delay support, keyboard accessible |

## 🪝 Custom Hooks

| Hook | Description |
|------|-------------|
| `useClickOutside` | Detect clicks outside a component |
| `useClipboard` | Copy text to clipboard with feedback |
| `useDebounce` | Debounce a value (e.g. search inputs) |
| `useFetch` | Simple data fetching with loading/error states |
| `useForm` | Form state management with validation |
| `useIntersectionObserver` | Observe element viewport intersection |
| `useInterval` | `setInterval` as a hook with auto-cleanup |
| `useLocalStorage` | Sync state with localStorage |
| `useMediaQuery` | Responsive design breakpoint detection |
| `useOnlineStatus` | Track browser online/offline status |
| `usePrevious` | Track previous value of state |
| `useToggle` | Simple boolean toggle |
| `useWindowSize` | Track window dimensions with breakpoints |

---

## 🛠️ Tech Stack

- **React 18** + **TypeScript** (strict mode)
- **Inline styles** (zero CSS frameworks or build-time CSS)
- **Jest + React Testing Library** (unit tests)
- **tsc** (TypeScript compiler for builds)

---

## 🚀 Quick Start

```bash
git clone https://github.com/tapiwamakandigona/react-ui-kit.git
cd react-ui-kit
npm install
```

```bash
npm test       # Run test suite
npm run build  # Build library to dist/
```

### Usage

Install as a local dependency or publish to npm, then import components:

```tsx
import { Button, Modal, useToast } from 'react-ui-kit';

function App() {
  return <Button variant="primary" size="md">Click me</Button>;
}
```

---

## 📁 Project Structure

```
src/
├── components/          # UI components
│   ├── Accordion.tsx
│   ├── Avatar.tsx
│   ├── Badge.tsx
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Dropdown.tsx
│   ├── Input.tsx
│   ├── Modal.tsx
│   ├── Progress.tsx
│   ├── Skeleton.tsx
│   ├── Spinner.tsx
│   ├── Switch.tsx
│   ├── Tabs.tsx
│   ├── Toast.tsx
│   ├── Tooltip.tsx
│   └── __tests__/       # Component tests
├── hooks/               # Custom React hooks
│   ├── useClickOutside.ts
│   ├── useClipboard.ts
│   ├── useDebounce.ts
│   ├── useFetch.ts
│   ├── useForm.ts
│   ├── useIntersectionObserver.ts
│   ├── useInterval.ts
│   ├── useLocalStorage.ts
│   ├── useMediaQuery.ts
│   ├── useOnlineStatus.ts
│   ├── usePrevious.ts
│   ├── useToggle.ts
│   ├── useWindowSize.ts
│   └── __tests__/       # Hook tests
└── index.ts             # Library entry point
```

---

## 📄 License

[MIT](LICENSE)

---

<div align="center">
  <b>Built by <a href="https://github.com/tapiwamakandigona">Tapiwa Makandigona</a></b>
  <br/>
  <i>⭐ Star if you appreciate zero-dependency component design!</i>
</div>
