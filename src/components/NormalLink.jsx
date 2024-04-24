export function NormalLink({ children, ...props }) {
    return (
        <a className="underline" {...props}>
            🔗 {children}
        </a>
    );
}
