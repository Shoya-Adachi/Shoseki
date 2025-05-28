import { createRoute, useNavigate } from "@tanstack/react-router";
import HomeScreen from "../pages/Home/HomeScreen";
import { rootRoute } from "./rootRoute";
import { LoginScreen } from "../pages/Login/LoginScreen";
import { useEffect } from "react";
import SignupScreen from "../pages/Signup/SignupScreen";

// 初期リダイレクトexport
export const indexRoute = createRoute({
  path: "/",
  getParentRoute: () => rootRoute,
  component: () => {
    const navigate = useNavigate();
    useEffect(() => {
      navigate({ to: "/login", replace: true });
    }, []);
    return null;
  },
});

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute, // 親ルートを明示
  path: "/home",
  component: () => <HomeScreen />,
});

export const LoginRouter = createRoute({
  getParentRoute: () => rootRoute, // 親ルートを明示
  path: "/login",
  component: () => <LoginScreen />,
});

export const SignupRouter = createRoute({
  getParentRoute: () => rootRoute, // 親ルートを明示
  path: "/signup",
  component: () => <SignupScreen />,
});
