import FlashTimer from "../ui/FlashTimer";
import FlashSaleCard from "/src/components/home/FlashSaleCard";
import { flashSaleProducts } from "../../data/flashSale";

export default function FashionSale({ padding }) {
    const fashionCards = flashSaleProducts.map((data) => (
        <FlashSaleCard
            key={data.id}
            label={data.title}
            badge={data.badge}
            price={data.price}
            finalPrice={data.finalPrice}
            image={data.thumbnail}
        />
    ));
    return (
        <div className={`bg-accent ${padding} space-y-6`}>
            <div className="flex flex-col gap-2 items-center">
                <h2 className="font-black text-4xl text-white mb-2">
                    MIDNIGHT FLASH SALE
                </h2>
                <FlashTimer endTime="2026-05-01T00:00:00" />
            </div>
            <div className="flex-1 grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                {fashionCards}
            </div>
        </div>
    );
}
