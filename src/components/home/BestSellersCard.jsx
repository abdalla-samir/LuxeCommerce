import { useState, useContext } from "react";
import Star from "/src/assets/icons/star.svg?react";
import CardMessage from "/src/components/ui/CardMessage";
import { ButtonStyleContext } from "../../context/ButtonStyleContext";

export default function BestSellersCard({
    category,
    name,
    price,
    rating,
    image,
}) {
    const [showMessage, setShowMessage] = useState(false);
    const { mainButtonStyle } = useContext(ButtonStyleContext);
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
                        buttonStyle={mainButtonStyle}
                        showWishListIcon={true}
                        showMessage={showMessage}
                    />
                </div>
                <div className="flex flex-col  p-2 bg-bg-main">
                    <div className="flex justify-between text-xs">
                        <span className="text-text-secondary tracking-wider ">
                            {category}
                        </span>
                        <span className="bg-accent text-xs text-white py-0.5 px-2 flex items-center gap-2 justify-between rounded-full">
                            <Star width={12} />
                            <span>{rating}</span>
                        </span>
                    </div>
                    <div className=" flex flex-col">
                        <span className="font-medium">{name}</span>
                        <span className="font-black">${price}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
