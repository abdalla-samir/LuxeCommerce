import { useState } from "react";
import CardMessage from "/src/components/ui/CardMessage";

export default function CategoriesCard({ label, icon: Icon, imagePath }) {
    const [shopNowMessage, setShopNowMessage] = useState(false);
    return (
        <div className="flex justify-center">
            <div
                className={`self-center relative rounded-xl p-4 w-72.5 h-75 bg-cover overflow-hidden`}
                style={{ backgroundImage: `url(${imagePath})` }}
                onMouseEnter={() => setShopNowMessage(true)}
                onMouseLeave={() => setShopNowMessage(false)}
            >
                <div className="text-white text-sm absolute bottom-5 left-5 flex flex-col gap-2">
                    <span className="">
                        <Icon />
                    </span>
                    <span>{label}</span>
                </div>
                <CardMessage label="Shop Now" showMessage={shopNowMessage} />
            </div>
        </div>
    );
}
