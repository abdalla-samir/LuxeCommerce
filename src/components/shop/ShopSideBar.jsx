import { useContext, useEffect, useState } from "react";
import { shopCategories } from "/src/data/shopCategories";
import { ShopContext } from "../../context/ShopContext";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import BurgerIcon from "/src/assets/icons/burger.svg?react";
import Cross from "/src/assets/icons/cross.svg?react";
import PanelIcon from "/src/assets/icons/panel.svg?react";
import SideBar from "../ui/SideBar";

export default function ShopSideBar() {
    const {
        selectedCategory,
        subCategories,
        setSubCategories,
        inputRange,
        setInputRange,
    } = useContext(ShopContext);
    const subcategories = shopCategories
        .filter((category) => category.id === selectedCategory)[0]
        ?.subcategories.map((subcategory) => {
            return (
                <label key={subcategory} className="flex gap-2">
                    <Checkbox
                        className=" data-[state=checked]:bg-accent data-[state=checked]:border-accent border-accent text-white"
                        checked={subCategories.includes(subcategory)}
                        onCheckedChange={() =>
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
    const [showSideBar, setShowSideBar] = useState(false);
    const [showToggleBar, setShowToggleBar] = useState(false);
    useEffect(() => {
        const media = window.matchMedia("(max-width: 1024px)");
        const handleResize = (event) => {
            const matches = event.matches;
            setShowToggleBar(matches);
            setShowSideBar(!matches);
        };
        handleResize({ matches: media.matches });
        media.addEventListener("change", handleResize);
        return () => media.removeEventListener("change", handleResize);
    }, []);
    return (
        <>
            <SideBar
                showSideBar={showSideBar}
                setShowSideBar={setShowSideBar}
                showToggleBar={showToggleBar}
            >
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <h2 className="text-primary font-medium text-lg">
                            Filter By
                        </h2>
                        <p className="text-xs font-light uppercase">
                            Refine Selection
                        </p>
                    </div>
                    {showToggleBar && (
                        <Cross
                            className="w-4 h-4 cursor-pointer text-primary hover:text-secondary transition"
                            onClick={() => setShowSideBar(!showSideBar)}
                        />
                    )}
                </div>
                <label className="flex flex-col gap-2 text-text-secondary text-xs">
                    <span className="uppercase">Price Range</span>
                    <Slider
                        min={0}
                        max={5000}
                        step={1}
                        value={[inputRange]}
                        onValueChange={setInputRange}
                    />
                    <div className="flex justify-between text-xs font-bold">
                        <span>$0</span>
                        <span>$5000+</span>
                    </div>
                </label>
                <div className="flex flex-col gap-2">
                    {subcategories.length > 0 && (
                        <span className="text-lg">Category</span>
                    )}
                    {subcategories}
                    {subcategories.length > 0 && (
                        <button
                            className="w-fit font-bold cursor-pointer  text-xs text-primary transition duration-200"
                            onClick={() => setSubCategories([])}
                        >
                            Clear
                        </button>
                    )}
                </div>
            </SideBar>
        </>
    );
}
