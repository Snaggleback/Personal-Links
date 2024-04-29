import { cloneElement } from "react";

export function CoolList(props) {
    return (
        <div className="max-w-[400px] w-full">
            <ul className="flex flex-col items-center mx-10" {...props}></ul>
        </div>
    );
}

export function CoolButton({ href, ...props }) {
    return (
        <li className="w-full">
            <a
                style={{
                    transition: "transform ease 0.5s, box-shadow ease 0.5s",
                }}
                className="block border-2 border-dog-blue my-5 text-center p-3 shadow-pixel-sm hover:text-white hover:bg-dog-blue hover:-translate-y-2 hover:shadow-none cursor-pointer dark:bg-slate-900/30 dark:text-zinc-200  shadow-dog-blue dark:shadow-zinc-300 dark:border-zinc-200"
                {...props}
                href={href}
            ></a>
        </li>
    );
}

export function MediaList(props) {
    return (
        <div className="max-w-[400px] w-full my-6 text-dog-blue dark:text-zinc-300">
            <ul className="flex justify-evenly" {...props}></ul>
        </div>
    );
}
export function MediaButton({ children, ...props }) {
    return (
        <li>
            <a className="block" {...props}>
                {cloneElement(children, { className: "size-6" })}
            </a>
        </li>
    );
}
