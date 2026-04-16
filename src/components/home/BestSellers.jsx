import { bestSellers } from "/src/data/bestSellers";
import BestSellersCard from "/src/components/home/BestSellersCard";
import Heading from "/src/components/ui/Heading";

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
        <div className={`${padding} bg-bg-section`}>
            <div className="text-text-primary flex max-sm:flex-col gap-2 justify-between items-center mb-4">
                <Heading
                    label="Best Sellers This Week"
                    tag="What Are You Waiting For!!!"
                />
                <a
                    href="#"
                    className="border-b-2 w-fit border-border-dark text-sm font-bold"
                >
                    View All
                </a>
            </div>
            <div className="grid">{bestSellersCards}</div>
        </div>
    );
}
