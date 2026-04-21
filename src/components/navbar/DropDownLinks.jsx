import CategoryLinks from "./CategoryLinks";
import { CategoryToggleContext } from "../../context/CategoryToggleContext";
import { useContext } from "react";

export default function DropDownLinks() {
    const { showCategoryLinks } = useContext(CategoryToggleContext);

    return (
        <>
            <li
                className={`${className} flex items-center gap-2`}
                onClick={handleCategoriesToggle}
            >
                Categories
                <Arrow width={10} />
            </li>
            {showCategoryLinks && <CategoryLinks />}
        </>
    );
}
