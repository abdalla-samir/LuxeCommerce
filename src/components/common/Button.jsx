export default function Button({ label, style, onClick, disabled }) {
    return (
        <button
            className={`w-40 transition duration-200 ${style}`}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
}
