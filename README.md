# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



## production deploy to Vercel [https://vercel.com/]
### Vercel setup 
* create Vercel account
* import git repo
* configure project
1. override output directory to 'dist'

## Routing via React-Router (lets you do browser router: https://reactrouter.com/en/main/start/tutorial)
npm create vite@latest name-of-your-project -- --template react (only if vite isn't installed)
# follow prompts
npm install react-router-dom
In Main.jsx at top:
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
Above bottom:
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);
In createRoot:
    <RouterProvider router={router} />

## Install bootstrap
npm install react-bootstrap bootstrap

<!-- You still need to deploy -->

### deploy
* from branch 'main':
1. $ `npm run build`
2. add changes and push to repo 