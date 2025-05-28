import { createRouter } from "@tanstack/react-router";
import { rootRoute } from "./rootRoute";
import { homeRoute, indexRoute, LoginRouter, SignupRouter } from "./pageRoute";

// ルートツリーを作成
const routeTree = rootRoute.addChildren([
  indexRoute,
  homeRoute,
  LoginRouter,
  SignupRouter,
]);

// ルーターを作成
export const router = createRouter({ routeTree });

// 型推論のために登録
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
