export default function TimeBox({ label, value }) {
    return (
        <div className="flex flex-col  bg-bg-main/10 w-15 h-15 justify-center items-center rounded">
            <span className="text-white text-lg">{value}</span>
            <span className="text-white/60 text-sm">{label}</span>
        </div>
    );
}
