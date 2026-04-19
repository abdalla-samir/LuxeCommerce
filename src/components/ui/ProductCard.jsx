import { useState, useContext } from "react";
import Star from "/src/assets/icons/star.svg?react";
import CardMessage from "/src/components/ui/CardMessage";
import { ShopContext } from "/src/context/ShopContext";
import ProductOne from "/src/assets/images/products/product-1.png";

export default function ProductCard({ name, category, price, image }) {
    const [showMessage, setShowMessage] = useState(false);
    const { mainButtonStyle } = useContext(ShopContext);
    return (
        <div className="flex justify-center">
            <div className="shadow">
                <div
                    className="relative rounded-t-md overflow-hidden"
                    onMouseEnter={() => setShowMessage(true)}
                    onMouseLeave={() => setShowMessage(false)}
                >
                    <img src={ProductOne} alt={name} />

                    <CardMessage
                        label="Add To Cart"
                        buttonStyle={mainButtonStyle}
                        showWishListIcon={true}
                        showMessage={showMessage}
                    />
                </div>
                <div className="flex flex-col gap-1 p-2 bg-bg-main z">
                    <div className="flex justify-between text-xs">
                        <span className="text-muted tracking-widest uppercase">
                            {category}
                        </span>
                    </div>
                    <div className=" flex flex-col text-primary ">
                        <span className=" uppercase text-sm font-medium">
                            {name}
                        </span>
                        <span className="font-black">${price}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
