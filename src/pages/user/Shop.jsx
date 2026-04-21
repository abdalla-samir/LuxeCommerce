import ShopContent from "../../components/shop/ShopContent";
import ShopSideBar from "../../components/shop/ShopSideBar";
import ShopHeader from "/src/components/shop/ShopHeader";
import { useState } from "react";
import { ButtonStyleContext } from "/src/context/ButtonStyleContext";
import { ShopContext } from "/src/context/ShopContext";

export default function Shop() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [subCategories, setSubCategories] = useState([]);
    const [inputRange, setInputRange] = useState(0);
    const mainButtonStyle =
        "text-white bg-primary hover:bg-accent h-full text-xs font-bold";
    return (
        <>
            <ShopContext.Provider
                value={{
                    selectedCategory,
                    setSelectedCategory,
                    subCategories,
                    setSubCategories,
                    inputRange,
                    setInputRange,
                    mainButtonStyle,
                }}
            >
                <ShopHeader />
                <div className="relative flex gap-2 min-h-[calc(100vh-132px)] bg-bg-section ">
                    <ShopSideBar />
                    <ShopContent />
                </div>
            </ShopContext.Provider>
        </>
    );
}
