import { twMerge } from "tailwind-merge";

export function BigTitle({ className, ...props }) {
    return (
        <h1
            className={twMerge("text-xl font-bold py-2", className)}
            {...props}
        />
    );
}
