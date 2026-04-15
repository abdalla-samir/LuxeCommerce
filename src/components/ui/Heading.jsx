export default function Heading({ label, tag }) {
    return (
        <>
            <p className="text-xs text-accent uppercase font-bold">{tag}</p>
            <h2 className="font-black text-4xl tracking-tighter text-text-primary uppercase">
                {label}
            </h2>
        </>
    );
}
