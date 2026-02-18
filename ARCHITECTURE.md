# Architecture

## Overview

React component library using CSS-in-JS (inline styles).

## Design Decisions

### Inline Styles
All components use `style` props instead of CSS files. This means:
- Zero CSS dependencies or build setup
- No className conflicts
- Works immediately in any React project
- Easy theming via style overrides

### Zero Runtime Dependencies
Only `react` and `react-dom` as peer dependencies.

### Components

| Component | Purpose | Key Features |
|-----------|---------|-------------|
| Button | Actions | 4 variants, 3 sizes, loading state |
| Input | Text entry | Label, error, hint, forwarded ref |
| Modal | Overlay dialog | Backdrop blur, ESC close, body scroll lock |
| Toast | Notifications | Context-based, auto-dismiss, 3 types |
| Card | Container | Padding, hover, clickable |
| Badge | Status labels | 4 color variants, 2 sizes |
| Spinner | Loading | Customizable size and color |
| Avatar | User display | Image or initials fallback |
