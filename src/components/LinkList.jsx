import React from "react";
import "../styles/LinkList.css";

export function LinkList({ medialist, ...props }) {
    const listType = medialist ? "medialist" : "coollist";
    return (
        <div id={listType}>
            <ul className={`${listType}-buttons`} {...props} />
        </div>
    );
}
export function LinkButton(props) {
    return (
        <li>
            <a {...props} />
        </li>
    );
}
