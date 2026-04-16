import { useContext, useState } from "react";
import WishListIcon from "/src/assets/icons/wishlist.svg?react";
import CardMessage from "/src/components/ui/CardMessage";
import CardOverlay from "/src/components/ui/CardOverlay";
import { ButtonStyleContext } from "../../context/ButtonStyleContext";

export default function FlashSaleCard({
    label,
    badge,
    price,
    finalPrice,
    image,
}) {
    const [addToCardMessage, setAddToCardMessage] = useState(false);
    const { mainButtonStyle } = useContext(ButtonStyleContext);
    return (
        <div className="flex justify-center items-center">
            <div className="">
                <div className="bg-bg-main rounded-t flex items-center justify-center">
                    <div
                        className="relative overflow-hidden rounded"
                        onMouseEnter={() => setAddToCardMessage(true)}
                        onMouseLeave={() => setAddToCardMessage(false)}
                    >
                        <span className="absolute bg-accent text-xs top-2 left-2 px-2 py-1 rounded-full text-white">
                            {badge}
                        </span>
                        <img src={image} alt="productImage" />
                        <CardMessage
                            label="Add To Cart"
                            buttonStyle={mainButtonStyle}
                            showMessage={addToCardMessage}
                            showWishListIcon={true}
                        />
                        <CardOverlay />
                    </div>
                </div>
                <div className="bg-bg-main border-t border-border p-2 flex items-center justify-between">
                    <div>
                        <h3 className="text-text-primary text-md font-bold">
                            {label}
                        </h3>
                        <div className="flex">
                            <div className="flex-1 flex items-center gap-2">
                                <span className="text-accent font-black text-md">
                                    {finalPrice}$
                                </span>
                                <span className="text-text-muted text-sm line-through">
                                    {price}$
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
