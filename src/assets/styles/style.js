import '@fontsource-variable/nunito';
import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    mainGray: {
      100: "#F0F1F5",
      200: "#E0E2EA",
      300: "#B9BDCF",
      400: "#9194A5",
      800: "#1A1B1D",
    },
    mainBlue: {
      light: "#4460F7",
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
});