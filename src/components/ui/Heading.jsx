export default function Heading({ label, tag, description }) {
    return (
        <>
            <div className="max-sm:text-center">
                {tag && (
                    <p className="text-xs text-accent uppercase font-bold">
                        {tag}
                    </p>
                )}
                <h2 className="font-black text-3xl tracking-tighter text-text-primary uppercase">
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
