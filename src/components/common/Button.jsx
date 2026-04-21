export default function Button({ link, label, style, onClick }) {
    return (
        <button
            className={`${style} w-40 cursor-pointer transition duration-200`}
            onClick={onClick}
        >
            {label}
        </button>
    );
}
