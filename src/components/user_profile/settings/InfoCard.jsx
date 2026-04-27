export default function InfoCard({
    headingIcon: Icon,
    headingLabel,
    children,
}) {
    return (
        <div className="flex-1 p-4 space-y-4 bg-white rounded text-primary">
            <div className="pb-4 flex gap-2 border-b border-border">
                <Icon className="w-5" />
                <h2 className="text-3xl font-black ">{headingLabel}</h2>
            </div>
            {children}
        </div>
    );
}
