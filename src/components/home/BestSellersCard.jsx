import { useState } from "react";
import Star from "/src/assets/icons/star.svg?react";
import CardMessage from "/src/components/ui/CardMessage";

export default function BestSellersCard({
    category,
    name,
    price,
    rating,
    image,
}) {
    const [showMessage, setShowMessage] = useState(false);
    console.log(showMessage);
    return (
        <div className="flex justify-center">
            <div>
                <div
                    className="relative rounded-md overflow-hidden"
                    onMouseEnter={() => setShowMessage(true)}
                    onMouseLeave={() => setShowMessage(false)}
                >
                    <img src={image} alt="best sellers product image" />

                    <CardMessage
                        label="Add To Cart"
                        showMessage={showMessage}
                    />
                </div>
                <div className="flex flex-col gap-2 mt-2">
                    <div className="flex justify-between">
                        <span className="text-text-secondary tracking-wider">
                            {category}
                        </span>
                        <span className="bg-accent text-xs text-white px-2 flex items-center gap-2 justify-between rounded-full">
                            <Star width={12} />
                            <span>{rating}</span>
                        </span>
                    </div>
                    <span className="font-bold">{name}</span>
                    <span className="font-bold">${price}</span>
                </div>
            </div>
        </div>
    );
}
