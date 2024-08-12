import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "@/theme";
import theme from "@/theme/theme";
import { router } from "@/router";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
