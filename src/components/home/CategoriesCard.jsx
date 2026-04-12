import { useState } from "react";
import Button from "/src/components/common/Button";

export default function CategoriesCard({ label, icon: Icon, imagePath }) {
    const [shopNow, setShopNow] = useState(false);
    return (
        <div className="flex justify-center">
            <div
                className={`self-center relative rounded-xl p-4 w-72.5 h-75 bg-cover overflow-hidden`}
                style={{ backgroundImage: `url(${imagePath})` }}
                onMouseEnter={() => setShopNow(true)}
                onMouseLeave={() => setShopNow(false)}
            >
                <div className="text-white text-sm absolute bottom-5 left-5 flex flex-col gap-2">
                    <span className="">
                        <Icon />
                    </span>
                    <span>{label}</span>
                </div>
                <div
                    className={`absolute w-full h-full bg-bg-muted/30 top-0 left-0 flex items-center justify-center transition duration-300 ${shopNow ? "translate-x-0" : "translate-x-full"}`}
                >
                    <Button label="Shop Now" />
                </div>
            </div>
        </div>
    );
}
