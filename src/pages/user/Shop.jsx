import ShopContent from "../../components/shop/ShopContent";
import ShopSideBar from "../../components/shop/ShopSideBar";
import ShopHeader from "/src/components/shop/ShopHeader";
import { useState } from "react";
import { ShopCategoriesContext } from "/src/context/ShopCategoriesContext";
import { ButtonStyleContext } from "/src/context/ButtonStyleContext";

export default function Shop() {
    const [selectedCategory, setSelectedCategory] = useState("all");

    return (
        <>
            <ShopCategoriesContext.Provider
                value={{ selectedCategory, setSelectedCategory }}
            >
                <ShopHeader />
                <div className="grid grid-cols-[300px_1fr] gap-2 min-h-[calc(100vh-132px)] bg-bg-section ">
                    <ShopSideBar />
                    <ShopContent />
                </div>
            </ShopCategoriesContext.Provider>
        </>
    );
}
