const theme = {
  breakpoints: {
    xs: "320px",
    sm: "768px",
    md: "1280px",
    xl: "1440px",
    xxl: "1600px"
  },
  palette: {
    primary: {
      main: "#A0C1E0",
      light: "#7FA1C3",
      dark: "#1F3A6A"
    },
    text: {
      main: "#2C2C2C",
      light: "#FFFFFF",
      dark: "#000000"
    },
    error: {
      main: "#C0392B"
    },
    success: {
      main: "#27AE60"
    }
  },
  typography: {
    fontFamily: "Lucida Console",
    fontSize: {
      xs: "12px",
      sm: "16px",
      md: "20px",
      lg: "24px",
      xl: "28px",
      "2xl": "36px"
    },
    fontWeight: {
      light: 300,
      normal: 400,
      semiBold: 500,
      bold: 600,
      extraBold: 700
    },
    lineHeight: {
      sm: "16px",
      md: "24px",
      lg: "28px",
      xl: "36px",
      "2xl": "70px"
    }
  }
};

export default theme;
