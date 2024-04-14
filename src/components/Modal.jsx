export function Modal(props) {
    return <div className="modal" {...props} />;
}

export function ModalTrigger(props) {
    return (
        <div
            className="modal-open"
            {...props}
            onClick={(event) =>
                toggleContent(
                    event.target
                        .closest(".modal")
                        .querySelector(".blackscreen"),
                )
            }
        />
    );
}

export function ModalContent(props) {
    return (
        <div
            className="blackscreen hidden"
            onClick={(event) => toggleContent(event.target, "blackscreen")}
        >
            <div className="modal-content" {...props} />
        </div>
    );
}

function toggleContent(element, hidden) {
    if (element.classList.contains("hidden")) {
        element.classList.remove("hidden");
    }
    if (element.classList.contains(hidden)) {
        element.classList.add("hidden");
    }
}
