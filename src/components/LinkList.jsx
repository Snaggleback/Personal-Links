import React from "react";
import { useEffect } from "react";
import "../styles/LinkList.css";

export function LinkList({ type = "coollist", ...props }) {
    useEffect(() => {
        const buttons = document.querySelectorAll(`.${type} li`);
        buttons.forEach((button) => {
            button.classList.add(`${type}-link-button`);
        });
    }, [type]);

    return (
        <div className={type}>
            <ul className={`${type}-buttons`} {...props} />
        </div>
    );
}

export function LinkButton({ className, ...props }) {
    return (
        <li className={className}>
            <a {...props} />
        </li>
    );
}
