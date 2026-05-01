export default function Heading({
    label,
    tag,
    description,
    labelColor,
    headingLevel,
}) {
    return (
        <>
            <div className="max-sm:text-center">
                {tag && (
                    <p className="text-xs text-accent uppercase font-bold">
                        {tag}
                    </p>
                )}
                <h2
                    className={`font-black tracking-tighter uppercase ${headingLevel} ${labelColor ? labelColor : "text-primary"}`}
                >
                    {label}
                </h2>
                {description && (
                    <p className="text-xs text-secondary tracking-widest">
                        {description}
                    </p>
                )}
            </div>
        </>
    );
}
