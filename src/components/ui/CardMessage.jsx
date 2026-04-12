import Button from "/src/components/common/Button";

export default function CardMessage({ label, showMessage }) {
    return (
        <div
            className={`absolute w-full h-full bg-bg-muted/30 top-0 left-0 flex items-center justify-center transition duration-300 ${showMessage ? "translate-x-0" : "translate-x-full"}`}
        >
            <Button label={label} />
        </div>
    );
}
