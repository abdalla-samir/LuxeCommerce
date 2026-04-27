import ShopContent from "../../components/shop/ShopContent";
import ShopSideBar from "../../components/shop/ShopSideBar";
import ShopHeader from "/src/components/shop/ShopHeader";
import { useContext, useState } from "react";
import { StyleContext } from "/src/context/StyleContext";
import { ShopContext } from "/src/context/ShopContext";

export default function Shop() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [subCategories, setSubCategories] = useState([]);
    const [inputRange, setInputRange] = useState([0]);
    const [currentPage, setCurrentPage] = useState(1);
    const { mainButtonStyle } = useContext(StyleContext);

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
                    currentPage,
                    setCurrentPage,
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
