import React from "react";
import ReactDOM from "react-dom/client";

// Aplicação
import { App } from "./App.jsx";
// Componentes, utilitários e dados, temas
import { setThemeLocal } from "./components";

// Folhas de estilos
import "./styles/fonts.css";
import "./styles/tailwind.css";

// Configurando o tema localmente ao carregar a página
window.onload = setThemeLocal;

ReactDOM.createRoot(document.getElementById("main")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
