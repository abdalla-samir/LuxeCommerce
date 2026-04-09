export default function InfoLinks({ variant, className }) {
    return (
        <>
            <li
                className={`${variant === "sidebar" ? "text-text-muted" : ""} ${className}`}
            >
                Journal
            </li>
            <li
                className={`${variant === "sidebar" ? "text-text-muted" : ""} ${className}`}
            >
                About
            </li>
        </>
    );
}
