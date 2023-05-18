import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { ChakraProvider} from "@chakra-ui/react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PlacarFinal from "./routes/PlacarFinal.tsx";
import PlacarIntermediario from "./routes/PlacarIntermediario.tsx";
import ErrorPage from "./routes/ErrorPage.tsx";
import theme from "./theme.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/PlacarIntermediario",
        element: <PlacarIntermediario />,
      },
      {
        path: "/PlacarFinal",
        element: <PlacarFinal />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ChakraProvider>
);
