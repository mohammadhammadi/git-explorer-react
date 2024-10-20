import { lazy } from "react";
import Home from "./components/home";

const Users = lazy(() => import("./components/users"));
const UserProfile = lazy(() => import("./components/userProfile"));
const SearchUser = lazy(() => import("./components/searchUser"));
const Notfound = lazy(() => import("./notfound"));
const Login = lazy(() => import("./components/login"));
const AuthProfile = lazy(() => import("./components/authProfile"));
const AboutUs = lazy(() => import("./components/about"));

export const appRoutes = [
  {
    path: "/",
    component: Home,
    requireAuth: false,
  },
  {
    path: "/users",
    component: Users,
    requireAuth: false,
  },
  {
    path: "/login",
    component: Login,
    requireAuth: false,
  },
  {
    path: "/authProfile",
    component: AuthProfile,
    requireAuth: true,
  },
  {
    path: "/users/user/:username",
    component: UserProfile,
    requireAuth: false,
  },
  {
    path: "/search",
    component: SearchUser,
    requireAuth: false,
  },
  {
    path: "/about",
    component: AboutUs,
    requireAuth: false,
  },
  {
    path: "/*",
    component: Notfound,
    requireAuth: false,
  },
];
