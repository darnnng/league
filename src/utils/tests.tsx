import React, { ReactElement, ReactNode } from "react";
import { render } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { router } from "@/router";
import { GlobalStyle } from "@/theme";
import theme from "@/theme/theme";

interface ProvidersProps {
  children: ReactNode;
}

export const RouterTestProvider = () => (
  <RouterProvider router={router} />
);

const ProviderWrapper: React.FC<ProvidersProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

const customRender = (ui: ReactElement) =>
  render(ui, { wrapper: ProviderWrapper });

export { customRender as render };
