import Home from "./pages/home";
import projects from "./pages/projectDetail";

export const ROUTES = [
  { path: "/", component: Home },
  { path: `/projects/:project`, component: projects },
];
