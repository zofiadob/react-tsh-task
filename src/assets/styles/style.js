import '@fontsource-variable/nunito';
import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    mainGray: {
      50: "#F8F8FA",
      100: "#F0F1F5",
      200: "#E0E2EA",
      300: "#B9BDCF",
      400: "#9194A5",
      750: "rgba(26, 27, 29, 0.9)",
      800: "#1A1B1D",
    },
    mainBlue: {
      500: "#4460F7",
      600: "#2140E8",
    },
    mainYellow: "#F9A52B",
    buttonsColor: {
      200: "#4460F7",
      300: "#2140E8",
      400: "#4460F7",
    }
  },
  fonts: {
    body: "Nunito Variable, sans-serif",
  },
  styles: {
    global: {
      '*': {
        boxSizing: "border-box"
      },
      'body': {
        margin: 0,
        fontWeight: 600,
        minHeight: "100vh",
        backgroundColor: "#F8F8FA"
      }
    }
  }
});