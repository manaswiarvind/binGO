import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Scan } from "./pages/Scan";
import { Rewards } from "./pages/Rewards";
import { Profile } from "./pages/Profile";
import { Leaderboard } from "./pages/Leaderboard";
import { Login } from "./pages/Login";
import { Landing } from "./pages/Landing";
import { Root } from "./pages/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    Component: Landing,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/app",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "scan", Component: Scan },
      { path: "rewards", Component: Rewards },
      { path: "leaderboard", Component: Leaderboard },
      { path: "profile", Component: Profile },
    ],
  },
]);