import { brands } from "/src/data/brands";

export default function Brands() {
    const brandList = brands.map((obj) => <li key={obj.id}>{obj.name}</li>);
    return (
        <div className="section-padding bg-bg-main">
            <p className="text-text-secondary font-medium text-center tracking-widest text-xs uppercase">
                Authorized Global Partners
            </p>
            <ul className="mt-10 flex flex-wrap sm:justify-between max-sm:justify-center gap-6 text-2xl text-text-muted uppercase font-black">
                {brandList}
            </ul>
        </div>
    );
}
