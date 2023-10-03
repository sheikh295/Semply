import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root.jsx";
import Signin from "./pages/Signin";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Signup from "./pages/Signup";
import SigninPass from "./pages/SigninPass";
import Onboarding from "./pages/Onboarding";
import { Home } from "@mui/icons-material";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signin />,
  },
  {
    path: "/signin",
    element: <SigninPass />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/onboarding",
    element: <Onboarding />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
