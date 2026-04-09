import Arrow from "/src/assets/icons/arrow.svg?react";
import { CategoryToggleContext } from "../../context/CategoryToggleContext";
import { useContext } from "react";

export default function PrimaryLinks({ className }) {
    const { handleCategoriesToggle } = useContext(CategoryToggleContext);
    return (
        <>
            <li className={className}>Shop</li>
            <li
                className={`${className} flex items-center gap-2`}
                onClick={handleCategoriesToggle}
            >
                Categories
                <Arrow width={10} />
            </li>
            <li className={className}>Deals</li>
        </>
    );
}
