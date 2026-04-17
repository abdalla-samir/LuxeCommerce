import { createContext } from "react";

export const ShopCategoriesContext = createContext({
    selectedCategory: "all",
    setSelectedCategory: () => {},
});
