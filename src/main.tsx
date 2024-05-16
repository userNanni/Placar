import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { ChakraProvider } from "@chakra-ui/react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/Home.tsx";
import ErrorPage from "./routes/ErrorPage.tsx";
import theme from "./theme.tsx";
import PlacarIntermediarioProjecao from "./routes/PlacarIntermediario-projecao.tsx";
import PlacarFinalProjecao from "./routes/PlacarFinal-projecao.tsx";
import Placar from "./routes/Placar.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/PlacarIntermediario-Projecao",
        element: <PlacarIntermediarioProjecao />,
      },
      {
        path: "/PlacarFinal-Projecao",
        element: <PlacarFinalProjecao />,
      },
      {
        path: "/Placar",
        element: <Placar />,
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
