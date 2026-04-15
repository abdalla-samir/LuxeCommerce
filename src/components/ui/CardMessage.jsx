import Button from "/src/components/common/Button";

export default function CardMessage({ label, buttonStyle, showMessage }) {
    return (
        <div
            className={`py-5 z-50 absolute w-full h-20  bottom-0 left-0 flex items-center justify-around  transition duration-300 ${showMessage ? "translate-y-0" : "translate-y-full"}`}
        >
            <Button label={label} style={buttonStyle} />
        </div>
    );
}
