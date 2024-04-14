export function Dropdown(props) {
    return <div className="dropdown" {...props} />;
}

export function DropdownTrigger(props) {
    function showContent(event) {
        const dropdownContent = event.target
            .closest(".dropdown")
            .querySelector(".dropdown-content");

        dropdownContent.classList.toggle("hidden");
    }

    return <div className="dropdown-open" onClick={showContent} {...props} />;
}

export function DropdownContent(props) {
    return <div className="dropdown-content hidden" {...props} />;
}
