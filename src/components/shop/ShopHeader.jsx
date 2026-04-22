import { shopCategories } from "/src/data/shopCategories";
import { useContext } from "react";
import { ShopContext } from "/src/context/ShopContext";

export default function ShopHeader() {
    const {
        selectedCategory,
        setSelectedCategory,
        setSubCategories,
        setInputRange,
        setCurrentPage,
    } = useContext(ShopContext);
    const shopCategoriesList = shopCategories.map((obj) => (
        <li key={obj.id}>
            <button
                className={` text-nowrap shrink-0  text-xs py-1.5 px-4 rounded-lg font-medium uppercase transition duration-200 cursor-pointer ${selectedCategory === obj.id ? "bg-bg-dark text-white " : "bg-bg-muted text-text-secondary"}`}
                onClick={() => {
                    setSelectedCategory(obj.id);
                    setSubCategories([]);
                    setInputRange([0]);
                    setCurrentPage(1);
                }}
            >
                {obj.name}
            </button>
        </li>
    ));
    return (
        <ul className="flex gap-10 overflow-x-scroll p-4 shadow h-15">
            {shopCategoriesList}
        </ul>
    );
}
