import FlashTimer from "../ui/FlashTimer";
import FlashSaleCard from "/src/components/home/FlashSaleCard";
import { flashSaleProducts } from "../../data/flashSale";
import Heading from "../ui/Heading";

export default function FashionSale() {
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
        <div className="bg-linear-to-b from-accent to-accent-light section-padding space-y-6">
            <div className="flex flex-col gap-2 items-center">
                <Heading label="MIDNIGHT FLASH SALE" labelColor="text-white" />
                <FlashTimer
                    endTime="2026-05-01T00:00:00"
                    styles={flashTimerStyles}
                    delimeterColor="text-white"
                />
            </div>
            <div className="grid-auto">{fashionCards}</div>
        </div>
    );
}
