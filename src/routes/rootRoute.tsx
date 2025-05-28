import { createRootRoute } from "@tanstack/react-router";
import { Outlet } from "@tanstack/react-router";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme";

export const rootRoute = createRootRoute({
  component: () => (
    <>
      {/* ここに共通レイアウトを書くこともできる */}
      <ThemeProvider theme={theme}>
        <Outlet /> {/* 子ルートを表示する場所 */}
      </ThemeProvider>
    </>
  ),
});
