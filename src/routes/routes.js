import { Home, About, Shop } from "../pages";

export const routes = [
  {
    path: "/home",
    component: Home,
    exact: true,
    id: false,
    key: 121,
  },
  {
    path: "/shop",
    component: Shop,
    exact: true,
    id: false,
    key: 213,
  },
  {
    path: "/about",
    component: About,
    exact: true,
    id: false,
    key: 213,
  },
];
