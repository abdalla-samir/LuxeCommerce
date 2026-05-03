import { bestSellers } from "/src/data/bestSellers";
import BestSellersCard from "/src/components/home/BestSellersCard";
import Heading from "/src/components/ui/Heading";
import HeaderLink from "/src/components/ui/HeaderLink";

export default function BestSellers() {
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
        <div className="section-padding bg-bg-section">
            <div className="text-primary flex max-sm:flex-col gap-2 justify-between items-center mb-4">
                <Heading
                    label="Best Sellers This Week"
                    tag="What Are You Waiting For!!!"
                    headingLevel="heading-one"
                />
                <HeaderLink label="View All" to="/shop" />
            </div>
            <div className="grid-auto">{bestSellersCards}</div>
        </div>
    );
}
