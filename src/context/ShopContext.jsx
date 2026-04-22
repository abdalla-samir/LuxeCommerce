import { createContext } from "react";

export const ShopContext = createContext({
    inputRange: 0,
    setInputRange: () => {},
    subCategories: [],
    setSubCategories: () => {},
    selectedCategory: "all",
    setSelectedCategory: () => {},
    mainButtonStyle: "",
    currentPage: 1,
    setCurrentPage: () => {},
});
