import React from "react";

export function CoolList(props) {
    return (
        <div className="max-w-[400px] w-full">
            <ul className="flex flex-col items-center mx-10" {...props}></ul>
        </div>
    );
}

export function CoolButton({ href = "#", ...props }) {
    return (
        <li className="w-full">
            <a
                style={{
                    transition: "transform ease 0.5s, box-shadow ease 0.5s",
                }}
                className="block border-2 border-[#190c2f] my-5 text-center p-3 shadow-pixel-sm hover:text-white hover:bg-[#190c2f] hover:-translate-y-2 hover:shadow-none cursor-pointer"
                {...props}
                href={href}
            ></a>
        </li>
    );
}

export function MediaList(props) {
    return (
        <div className="max-w-[400px] w-full my-6 text-[#190c2f]">
            <ul className="flex justify-evenly" {...props}></ul>
        </div>
    );
}
export function MediaButton({ children, ...props }) {
    return (
        <li>
            <a className="block" {...props}>
                {React.cloneElement(children, { className: "size-6" })}
            </a>
        </li>
    );
}
