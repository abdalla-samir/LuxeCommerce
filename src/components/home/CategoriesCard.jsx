import { useState } from "react";
import CardMessage from "/src/components/ui/CardMessage";
import CardOverlay from "../ui/CardOverlay";
import { useContext } from "react";
import { ButtonStyleContext } from "../../context/ButtonStyleContext";

export default function CategoriesCard({ label, tag, icon: Icon, imagePath }) {
    const [shopNowMessage, setShopNowMessage] = useState(false);
    const { mainButtonStyle } = useContext(ButtonStyleContext);
    return (
        <div className="flex justify-center">
            <div
                className={` relative rounded-xl p-4 w-60 h-90 bg-cover overflow-hidden`}
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
                    buttonStyle={mainButtonStyle}
                    showMessage={shopNowMessage}
                />
                <CardOverlay />
            </div>
        </div>
    );
}
