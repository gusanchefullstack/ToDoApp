# ToDo App

A clean, responsive task management web app built with React and Tailwind CSS. Tasks persist in `localStorage` so your list survives page refreshes — no backend required.

![Deploy to GitHub Pages](https://img.shields.io/github/actions/workflow/status/gusanchefullstack/ToDoApp/static.yml?branch=main&label=deploy)
![License](https://img.shields.io/badge/license-MIT-blue)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)

## Table of Contents

- [Why This App?](#why-this-app)
- [Live Demo](#live-demo)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Key Concepts Learned](#key-concepts-learned)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## Why This App?

Most todo tutorials stop at a static list. This project goes further — it introduces **React Context API** for shared state, **custom hooks** for localStorage persistence, and a **component-per-concern** architecture that mirrors real-world React applications.

---

## Live Demo

[https://gusanchefullstack.github.io/ToDoApp](https://gusanchefullstack.github.io/ToDoApp)

---

## Screenshots

![ToDo App hero screenshot](./src/assets/hero.png)

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev/) | 18 | UI library |
| [Vite](https://vitejs.dev/) | 8 | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Utility-first styling |
| [react-icons](https://react-icons.github.io/react-icons/) | 5 | Icon components |
| [gh-pages](https://github.com/tschaub/gh-pages) | 6 | GitHub Pages deployment |

---

## Installation

**Prerequisites:** Node.js >= 18

```bash
# Clone the repository
git clone https://github.com/gusanchefullstack/ToDoApp.git
cd ToDoApp

# Install dependencies
npm install
```

---

## Quick Start

```bash
# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

---

## Project Structure

```
src/
├── App/
│   ├── index.jsx        # Root component — wraps app in TodoProvider
│   ├── AppUI.jsx        # Layout and conditional rendering logic
│   └── App.css          # App-scoped styles
├── components/
│   ├── AddTodoForm/     # Form inside the modal to create a new task
│   ├── CreateFirstTodo/ # Empty-state prompt when the list is empty
│   ├── CreateToDoButton/# Floating action button to open the modal
│   ├── Modal/           # Overlay modal wrapper
│   ├── ToDoCounter/     # Shows X of Y tasks completed
│   ├── ToDoItem/        # Single task row with complete/delete actions
│   ├── ToDoList/        # Renders the list of ToDoItem components
│   ├── ToDoSearch/      # Filters tasks by text input
│   ├── TodosError/      # Error state UI
│   └── TodosLoading/    # Loading state UI
├── context/
│   └── TodoContext/
│       ├── index.jsx    # Context provider and all todo state logic
│       └── useLocalStorage.js  # Custom hook for localStorage sync
├── assets/              # Static images and SVGs
├── index.css            # Global styles / Tailwind base
└── main.jsx             # React DOM entry point
```

---

## Key Concepts Learned

### React Context API
State and actions (`addToDo`, `finishTodo`, `deleteTodo`, `searchValue`) are managed in a single `TodoContext` provider and consumed in any component via `useContext` — no prop drilling.

- Docs: [React Context](https://react.dev/learn/passing-data-deeply-with-context)

### Custom Hooks
`useLocalStorage` abstracts reading and writing to `localStorage` behind a `useState`-like interface, keeping the context provider clean.

- Docs: [Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)

### Component Architecture
Each UI concern lives in its own folder under `src/components/`. This keeps components small, focused, and easy to test in isolation.

### Vite + GitHub Pages Deployment
The `vite.config.js` sets the correct `base` path for GitHub Pages, and the `gh-pages` package automates pushing the `dist/` folder to the `gh-pages` branch via `npm run deploy`.

- Docs: [Vite Static Deploy — GitHub Pages](https://vitejs.dev/guide/static-deploy.html#github-pages)

### Tailwind CSS v4
Tailwind is configured as a Vite plugin (`@tailwindcss/vite`) — no `tailwind.config.js` needed. Utility classes handle all layout and spacing.

- Docs: [Tailwind CSS v4 with Vite](https://tailwindcss.com/docs/installation/using-vite)

---

## Roadmap

- [x] Add, complete, and delete todos
- [x] Search / filter tasks in real time
- [x] Persist tasks in localStorage
- [x] Modal form for adding new tasks
- [x] Empty state and loading/error states
- [x] Deploy to GitHub Pages via CI/CD
- [ ] Edit existing todos
- [ ] Due dates and priority levels
- [ ] Dark mode toggle
- [ ] Drag-and-drop reordering

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push to the branch: `git push origin feat/your-feature`
5. Open a Pull Request

Please follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages.

---

## License

Distributed under the MIT License. See [LICENSE](./LICENSE) for details.

---

## Author

**Gustavo Sanchez**

[![Website](https://img.shields.io/badge/Website-gustavosanchez.dev-0A66C2?style=flat&logo=google-chrome&logoColor=white)](https://www.gustavosanchez.dev)
[![GitHub](https://img.shields.io/badge/GitHub-gusanchefullstack-181717?style=flat&logo=github&logoColor=white)](https://github.com/gusanchefullstack)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Gustavo_Sanchez-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gusanchefullstack)
[![X](https://img.shields.io/badge/X-@gusanchefullstack-000000?style=flat&logo=x&logoColor=white)](https://x.com/gusanchefullstack)
