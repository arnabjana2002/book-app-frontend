import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Routers/Router.jsx";
import { store } from "./Redux/store.js";
import { Provider } from "react-redux";

import 'sweetalert2/dist/sweetalert2.js'

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
