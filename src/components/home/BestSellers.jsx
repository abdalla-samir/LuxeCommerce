import { bestSellers } from "/src/data/bestSellers";
import BestSellersCard from "/src/components/home/BestSellersCard";

export default function BestSellers({ padding }) {
    const bestSellersCards = bestSellers.map((obj) => (
        <BestSellersCard
            key={obj.id}
            name={obj.name}
            category={obj.category}
            price={obj.price}
            rating={obj.rating}
            image={obj.image}
        />
    ));
    return (
        <div className={`${padding}`}>
            <div className="text-text-primary flex max-sm:flex-col gap-2 justify-between mb-4">
                <h2 className="font-black text-xl tracking-tighter text-text-primary">
                    Best Sellers This Week
                </h2>
                <a
                    href="#"
                    className="border-b-2 w-fit border-border-dark text-sm font-bold"
                >
                    View All
                </a>
            </div>
            <div className="grid-4">{bestSellersCards}</div>
        </div>
    );
}
