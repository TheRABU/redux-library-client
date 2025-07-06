import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AllRoutes from "./pages/routes/AllRoutes.tsx";
import { Provider } from "react-redux";
import store from "./redux/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <AllRoutes />
    </Provider>
  </StrictMode>
);
