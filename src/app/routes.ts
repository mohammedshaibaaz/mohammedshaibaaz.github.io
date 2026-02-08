import { createBrowserRouter } from "react-router";
import { Home } from "@/app/pages/Home";
import { ProjectDetail } from "@/app/pages/ProjectDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/project/:id",
    Component: ProjectDetail,
  },
]);
