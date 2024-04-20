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
        if (type === "dropdown") {
            // Caso seja um DropDown, pega o elemento que deve ser escondido
            const dialogHide = event.target.closest(".dialog").querySelector(".dialog-content");
            // Caso o dropdown esteja aberto, fecha-o adicionando a animação
            if (dialogHide.classList.contains("hidden") === false) {
                // Adicionando a animação de fechar
                dialogHide.classList.toggle("dropdown-close-animation");
                setTimeout(() => {
                    // Removendo a classe hidden após a animação
                    dialogHide.classList.toggle("dropdown-close-animation");
                    dialogHide.classList.toggle("hidden");
                }, 400);
                // Retornando sem executar o resto do código
                return;
            }
            // Caso o dropdown esteja fechado, abre-o
            dialogHide.classList.toggle("hidden");
        } else {
            // Caso seja um Modal, pega o elemento que deve ser escondido
            const dialogHide = event.target.closest(".dialog").querySelector(".blackscreen");
            dialogHide.classList.toggle("hidden");
        }
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
            // Conteúdo do modal
            const modalContent = event.target.querySelector(".dialog-content");
            // Setando a animação de fechamento do modal
            modalContent.classList.add("modal-close-animation");
            // Esperando alguns milisegundos para que a animação seja executada
            setTimeout(() => {
                // Adicionando a classe hidden
                event.target.classList.add("hidden");
                // Removendo a classe de animação
                modalContent.classList.remove("modal-close-animation");
            }, 500);
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
