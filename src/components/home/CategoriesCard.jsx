import { useState } from "react";
import CardMessage from "/src/components/ui/CardMessage";

export default function CategoriesCard({ label, tag, icon: Icon, imagePath }) {
    const [shopNowMessage, setShopNowMessage] = useState(false);
    const buttonStyle =
        "text-white bg-primary hover:bg-accent h-full text-xs font-bold";
    return (
        <div className="flex justify-center">
            <div
                className={`self-center relative rounded-xl p-4 w-72.5 h-90 bg-cover overflow-hidden`}
                style={{ backgroundImage: `url(${imagePath})` }}
                onMouseEnter={() => setShopNowMessage(true)}
                onMouseLeave={() => setShopNowMessage(false)}
            >
                <div className="text-white text-sm absolute bottom-5 left-5 uppercase">
                    <span className="block text-white/70 text-xs">{tag}</span>
                    <span className="text-2xl font-black">{label}</span>
                </div>
                <CardMessage
                    label="Shop Now"
                    buttonStyle={buttonStyle}
                    showMessage={shopNowMessage}
                />
                <span className="absolute w-full h-15 bottom-0 left-0 bg-linear-to-t  from-black/40 to-black/0"></span>
            </div>
        </div>
    );
}
