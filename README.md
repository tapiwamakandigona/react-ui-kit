<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=200&section=header&text=React%20UI%20Kit&fontSize=50&animation=fadeIn&fontAlignY=38&desc=Zero-Dependency%20Component%20Library&descAlignY=51&descAlign=62" />
</div>

<h1 align="center">React UI Component Library (TypeScript)</h1>

<div align="center">
  <p><strong>A minimal, zero-dependency React component library with dark theme support, full TypeScript typings, Jest test coverage, and Storybook-ready exports.</strong></p>
  
  <p>
    <img src="https://img.shields.io/github/languages/top/tapiwamakandigona/react-ui-kit?style=for-the-badge&color=blue" alt="Top Language" />
    <img src="https://img.shields.io/github/last-commit/tapiwamakandigona/react-ui-kit?style=for-the-badge&color=green" alt="Last Commit" />
  </p>
</div>

---

## ⚡ Why Zero Dependencies?

Most UI libraries ship megabytes of CSS frameworks and peer dependencies. This library has **zero runtime dependencies** — every component is built from raw CSS custom properties and React primitives, giving you total control over bundle size.

## 🧩 Components

| Component | Props API | Features |
|-----------|----------|----------|
| **Button** | `variant`, `size`, `disabled`, `loading` | Primary/Secondary/Danger, spinner state |
| **Input** | `label`, `error`, `type` | Validation states, dark mode |
| **Modal** | `open`, `onClose`, `title` | Portal rendering, ESC key, backdrop click |
| **Toast** | `message`, `type`, `duration` | Auto-dismiss, stacking, success/error/info |
| **Card** | `title`, `footer` | Flexible content slots |
| **Badge** | `variant`, `count` | Color-coded status indicators |

---

## 🛠️ Stack

- **React 19** + **TypeScript** (strict mode)
- **CSS Custom Properties** (zero CSS frameworks)
- **Jest + React Testing Library** (unit tests)
- **Vite** (build + dev server)

---

## 🚀 Quick Start

```bash
git clone https://github.com/tapiwamakandigona/react-ui-kit.git
cd react-ui-kit
npm install
npm run dev
```

```bash
npm test    # Run test suite
npm run build  # Build library
```

---

<div align="center">
  <b>Built by <a href="https://github.com/tapiwamakandigona">Tapiwa Makandigona</a></b>
  <br/>
  <i>⭐ Star if you appreciate zero-dependency component design!</i>
</div>
