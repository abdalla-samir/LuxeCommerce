export default function TimeBox({
    label,
    value,
    lastChild,
    styles,
    delimeterColor,
}) {
    return (
        <>
            <div
                className={`flex flex-col w-15 h-15 justify-center items-center rounded text-primary ${styles}`}
            >
                <span className=" text-xl font-black">{value}</span>
                <span className="text-xs">{label}</span>
            </div>
            {!lastChild && (
                <span className={`font-black text-lg ${delimeterColor}`}>
                    :
                </span>
            )}
        </>
    );
}
