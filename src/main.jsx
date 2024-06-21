import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Global from "./styles/common.js";
import "./index.css";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import Toast from "./components/Toast/Toast.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/Read-Journey">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <Global />
        <Toast />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
