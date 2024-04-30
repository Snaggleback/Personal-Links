export function NormalLink({ children, ...props }) {
    return (
        <a className="underline" {...props}>
            <span role="img" aria-label="link">
                🔗
            </span>{" "}
            {children}
        </a>
    );
}
