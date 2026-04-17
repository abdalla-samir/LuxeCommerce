import { useContext, useState } from "react";
import { ShopCategoriesContext } from "/src/context/ShopCategoriesContext";
import { shopCategories } from "/src/data/shopCategories";

export default function ShopSideBar() {
    const [subCategories, setSubCategories] = useState([]);
    const { selectedCategory } = useContext(ShopCategoriesContext);
    const subcategories = shopCategories
        .filter((category) => category.id === selectedCategory)[0]
        ?.subcategories.map((subcategory) => {
            return (
                <label key={subcategory} className="flex gap-2">
                    <input
                        type="checkbox"
                        className="accent-accent"
                        checked={subCategories.includes(subcategory)}
                        onChange={() =>
                            setSubCategories((prev) => {
                                if (prev.includes(subcategory)) {
                                    return prev.filter(
                                        (item) => item !== subcategory,
                                    );
                                } else {
                                    return [...prev, subcategory];
                                }
                            })
                        }
                    />
                    {subcategory}
                </label>
            );
        });
    return (
        <div className="flex flex-col gap-4 text-sm shadow section-padding">
            <div>
                <h2 className="text-primary font-medium text-lg">Filter By</h2>
                <p className="text-xs font-light uppercase">Refine Selection</p>
            </div>
            <label className="flex flex-col gap-2 text-text-secondary text-xs">
                <span className="uppercase">Price Range</span>
                <input
                    type="range"
                    min={0}
                    max={5000}
                    className="accent-accent"
                />
                <div className="flex justify-between text-xs font-bold">
                    <span>$0</span>
                    <span>$5000+</span>
                </div>
            </label>
            <div className="flex flex-col gap-2">
                <span className="text-lg">Category</span>
                {subcategories}
                <button
                    className="w-fit font-bold cursor-pointer  text-xs text-primary transition duration-200"
                    onClick={() => setSubCategories([])}
                >
                    Clear
                </button>
            </div>
        </div>
    );
}
