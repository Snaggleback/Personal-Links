import React from "react";

export function Dialog({ type = "dropdown", children }) {
    // Adicionando o tipo de dialog aos filhos
    const typedChildren = React.Children.map(children, (child) => {
        return React.cloneElement(child, { type });
    });

    // Retornando Dialog e seus filhos com o tipo
    return (
        <NullElement className={`dialog ${type}`}>{typedChildren}</NullElement>
    );
}

export function Trigger({ type, ...props }) {
    // Funcionalidade de abrir e fechar o dialog
    function toggleContent(event) {
        // Classe para fechar o dialog vai depender do tipo
        const classToToggle =
            type === "modal" ? ".blackscreen" : `.dialog-content`;
        // Selecionando o elemento correspondente à classe
        const dialogContent = event.target
            .closest(".dialog")
            .querySelector(classToToggle);
        // Adicionando e removendo a classe
        dialogContent.classList.toggle("hidden");
    }

    // Retornando o Trigger com a função de abrir e fechar o dialog
    return (
        <div
            style={{ all: "unset" }}
            className="dialog-open"
            onClick={toggleContent}
            {...props}
        />
    );
}

export function Content({ type, ...props }) {
    // Conteúdo do dialog
    const dialogContent = <div className="dialog-content" {...props} />;
    // Se for um modal, o conteúdo vai ficar dentro de um blackscreen
    if (type === "modal") {
        return <BlackScreen>{dialogContent}</BlackScreen>;
    }
    // Se for um dropdown, clonamos o elemento e escondemos o conteúdo
    return React.cloneElement(dialogContent, {
        className: `${dialogContent.props.className} hidden`,
    });
}

function BlackScreen(props) {
    // Funcionalidade de fechar o blackscreen
    function hideBlackScreen(event) {
        if (event.target.classList.contains("blackscreen")) {
            event.target.classList.add("hidden");
        }
    }

    // Retornando o blackscreen, que já é um elemento oculto, já que iremos abrir o conteúdo
    return (
        <div
            className="blackscreen hidden"
            onClick={hideBlackScreen}
            {...props}
        />
    );
}

function NullElement(props) {
    // Elemento sem formatação e sem estilo
    return (
        <div
            style={{ all: "unset", width: "-webkit-fill-available" }}
            {...props}
        ></div>
    );
}
