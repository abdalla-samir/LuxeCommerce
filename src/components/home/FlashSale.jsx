import FlashTimer from "../ui/FlashTimer";
import FlashSaleCard from "/src/components/home/FlashSaleCard";
import { flashSaleProducts } from "../../data/flashSale";

export default function FashionSale({ padding }) {
    const flashTimerStyles = "bg-white/10 text-white";
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
        <div
            className={`bg-linear-to-b from-accent to-accent-light ${padding} space-y-6`}
        >
            <div className="flex flex-col gap-2 items-center">
                <h2 className="relative font-black text-4xl text-white text-center">
                    MIDNIGHT FLASH SALE
                </h2>
                <FlashTimer
                    endTime="2026-05-01T00:00:00"
                    styles={flashTimerStyles}
                    delimeterColor="text-white"
                />
            </div>
            <div className="flex-1 flex justify-evenly   flex-wrap gap-6">
                {fashionCards}
            </div>
        </div>
    );
}
