export default function SummeryCard({ title, value, icon: Icon }) {
    return (
        <div className="bg-white p-4 flex flex-col rounded shadow">
            <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-secondary uppercase tracking-wide">
                    {title}
                </span>
                <Icon width={16} className="text-accent" />
            </div>
            <span className="text-3xl font-black text-primary">{value}</span>
        </div>
    );
}
