export default function Button({ link, label, style, onClick }) {
    return (
        <button
            className={`w-40 cursor-pointer transition duration-200 ${style}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
}
