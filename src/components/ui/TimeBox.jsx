export default function TimeBox({ label, value, lastChild }) {
    return (
        <>
            <div className="flex flex-col w-15 h-15 bg-bg-muted justify-center items-center rounded">
                <span className=" text-xl font-black">{value}</span>
                <span className="text-xs">{label}</span>
            </div>
            {!lastChild && <span className="font-black text-lg">:</span>}
        </>
    );
}
