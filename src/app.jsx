import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// import Navbar from "./components/Navbar";
// import About from "./pages/About";
// import Team from "./pages/Team";
// import Contact from "./pages/Contact";
import Page from "./components/Page";

import Root from "./routes/root";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page pageType={"Home"} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <Page pageType={"About"} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/portfolio",
    element: <Page pageType={"Portfolio"} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/press",
    element: <Page pageType={"Press"} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/team",
    element: <Page pageType={"Team"} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: <Page pageType={"Contact"} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/investors", //external link
    element: <Page pageType={"Investors"} />,
    errorElement: <ErrorPage />,
  },

  //   {
  //     path: "/",
  //     element: <Root />,
  //     errorElement: <ErrorPage />,
  //   },
  //   {
  //     path: "/about",
  //     element: <About />,
  //     errorElement: <ErrorPage />,
  //   },
  //   {
  //     path: "/team",
  //     element: <Team />,
  //     errorElement: <ErrorPage />,
  //   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
