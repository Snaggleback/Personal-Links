import React from "react";
import ReactDOM from "react-dom/client";

// Aplicação
import { App } from "./App.jsx";

// Folhas de estilos
import "./styles/fonts.css";
import "./styles/reset.css";
import "./styles/main.css";

ReactDOM.createRoot(document.getElementById("main")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
