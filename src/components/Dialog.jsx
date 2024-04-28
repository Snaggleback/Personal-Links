import React from "react";

/* 
Classes para abrir e fechar o dropdown:
.dev-refe-dropdown
.dev-refe-dropdown-content
Classes para abrir e fechar o modal:
.dev-refe-modal
.dev-refe-modal-content
.dev-refe-modal-blackscreen
*/

export function Dialog({ type, children }) {
    // Adicionando o tipo de dialog aos filhos
    const typedChildren = React.Children.map(children, (child) => {
        return React.cloneElement(child, { type });
    });

    if (type === "modal") {
        return <Modal>{typedChildren}</Modal>;
    } else if (type === "dropdown") {
        return <Dropdown>{typedChildren}</Dropdown>;
    }
}

export function Trigger({ type, ...props }) {
    if (type === "dropdown") {
        return <DropdownTrigger {...props} />;
    } else if (type === "modal") {
        return <ModalTrigger {...props} />;
    }
}

export function Content({ type, ...props }) {
    if (type === "dropdown") {
        return <DropdownContent {...props} />;
    } else if (type === "modal") {
        return <ModalContent {...props} />;
    }
}

export function Dropdown(props) {
    return (
        <div
            className="dev-refe-dropdown [all:unset] [width:-webkit-fill-available]"
            {...props}
        />
    );
}
export function DropdownContent(props) {
    return (
        <div
            className="dev-refe-dropdown-content trasition-all duration-500 animate-scroll-down hidden border-4 p-5 border-dog-blue dark:border-zinc-300"
            {...props}
        />
    );
}

export function DropdownTrigger(props) {
    function toggleDropdown(event) {
        const dialogToToggle = event.target
            .closest(".dev-refe-dropdown")
            .querySelector(".dev-refe-dropdown-content");

        const isOpenDropDown =
            dialogToToggle.classList.contains("hidden") === false;

        if (isOpenDropDown) {
            // Adicionando a animação de fechar com um pequeno delay
            dialogToToggle.classList.add("-translate-y-[100%]");
            setTimeout(() => {
                // Removendo a classe hidden após a animação
                dialogToToggle.classList.remove("-translate-y-[100%]");
                dialogToToggle.classList.add("hidden");
            }, 200);
            // Retornando sem executar o resto do código
            return;
        }
        // Caso o dropdown esteja fechado, abre-o
        dialogToToggle.classList.remove("hidden");
    }

    return <div className="[all:unset]" onClick={toggleDropdown} {...props} />;
}

export function Modal(props) {
    return (
        <div
            className="dev-refe-modal [all:unset] [width:-webkit-fill-available]"
            {...props}
        />
    );
}

export function ModalContent(props) {
    function hideBlackScreen(event) {
        const isBlackScreenArea = event.target.classList.contains(
            "dev-refe-modal-blackscreen",
        );
        if (isBlackScreenArea) {
            // Conteúdo do modal
            const modalContent = event.target.querySelector(
                ".dev-refe-modal-content",
            );
            // Setando a animação de fechamento do modal
            modalContent.classList.add("scale-0");
            // Esperando alguns milisegundos para que a animação seja executada
            setTimeout(() => {
                // Adicionando a classe hidden
                event.target.classList.add("hidden");
                // Removendo a classe de animação
                modalContent.classList.remove("scale-0");
            }, 400);
        }
    }

    return (
        <div
            className="dev-refe-modal-blackscreen fixed w-screen h-screen top-0 right-0 bg-black/20 dark:bg-white/20 items-center justify-center hidden"
            onClick={hideBlackScreen}
        >
            <div
                className="dev-refe-modal-content max-w-[80%] max-h-[80%] w-[38rem] bg-slate-50 dark:bg-slate-800 p-10 border-2 border-dog-blue shadow-dog-blue dark:shadow-zinc-300 dark:border-zinc-200 animate-scale-in transition-transform duration-300 overflow-scroll shadow-pixel-lg no-scrollbar text-left"
                {...props}
            />
        </div>
    );
}

export function ModalTrigger(props) {
    function toggleModal(event) {
        const dialogHide = event.target
            .closest(".dev-refe-modal")
            .querySelector(".dev-refe-modal-blackscreen");

        const isOpenModal = dialogHide.classList.contains("hidden") === true;

        if (isOpenModal) {
            dialogHide.classList.remove("hidden");
            dialogHide.classList.add("flex");
        }
    }
    return <div className="[all:unset]" onClick={toggleModal} {...props} />;
}
