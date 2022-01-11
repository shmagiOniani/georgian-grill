import { Home, About } from "../pages";

export const routes = [
  {
    path: "/home",
    component: Home,
    exact: true,
    id: false,
    key: 121,
  },
  {
    path: "/about",
    component: About,
    exact: true,
    id: false,
    key: 213,
  },
];
