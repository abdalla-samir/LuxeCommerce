export default function Button({ link, label, style }) {
    return (
        <button
            className={`${style} w-40 cursor-pointer transition duration-200`}
        >
            {label}
        </button>
    );
}
