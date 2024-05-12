import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  fonts: {
    heading: `'Grenze Gotisch', serif`,
    body: `'old-standard-tt', serif`,
  },
});

export default theme;
