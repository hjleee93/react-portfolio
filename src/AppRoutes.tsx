import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes";

export default function AppRoutes() {
  return (
    <Routes>
      {ROUTES.map(({ path, component: Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
}
