import Arrow from "/src/assets/icons/arrow.svg?react";
import CategoryLinks from "./CategoryLinks";
import { useState } from "react";

export default function PrimaryLinks({ variant }) {
    const [showCategoryLinks, setShowCategoryLinks] = useState(false);
    const handleCategoriesToggle = () => {
        setShowCategoryLinks((prev) => !prev);
    };
    return (
        <>
            <li className={variant}>Home</li>
            <li className={variant}>Shop</li>
            <li>
                <button
                    onClick={handleCategoriesToggle}
                    className={`${variant} w-full flex items-center gap-2 justify-between`}
                >
                    Categories
                    <Arrow
                        width={10}
                        className={`${showCategoryLinks ? "rotate-180" : ""} transition`}
                    />
                </button>
                {showCategoryLinks && <CategoryLinks variant={variant} />}
            </li>
            <li className={variant}>Deals</li>
        </>
    );
}
