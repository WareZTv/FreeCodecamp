//main.jsx

import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Redux
import { Provider } from "react-redux";
import store from "./app/store";

// Styles globaux (Bootstrap via Sass + tes styles)
import "bootstrap/dist/css/bootstrap.min.css"; // CSS pur, pas de Sass
import "@fortawesome/fontawesome-free/css/all.min.css"; // Font Awesome
import "./styles/main.scss";                   // tes overrides + styles perso

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
