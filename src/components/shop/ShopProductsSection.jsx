import Pagination from "./Pagination";
import ProductCard from "/src/components/ui/ProductCard";
import { products } from "/src/data/products";
import { ShopContext } from "/src/context/ShopContext";
import { useContext } from "react";
export default function ShopProductsSection() {
    const {
        subCategories,
        selectedCategory,
        currentPage,
        setCurrentPage,
        inputRange,
    } = useContext(ShopContext);
    const productsPerPage = 8;
    const normalizedSubCategories = subCategories.map((cat) =>
        cat.toLowerCase(),
    );
    const filteredProducts = products
        .filter((product) => {
            if (selectedCategory === "all") {
                return true;
            } else {
                return (
                    product.category.toLowerCase() ===
                    selectedCategory.toLowerCase()
                );
            }
        })
        .filter((product) => {
            if (subCategories.length === 0) {
                return true;
            } else {
                return normalizedSubCategories.includes(
                    product.subcategory.toLowerCase(),
                );
            }
        })
        .filter((product) => {
            if (inputRange[0] === 0) {
                return true;
            } else {
                return product.price <= inputRange[0];
            }
        });
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const startIndex = (currentPage - 1) * productsPerPage;
    // Calculate the button range for pagination
    const currentProducts = filteredProducts.slice(
        startIndex,
        startIndex + productsPerPage,
    );
    let startPage = currentPage - 1;
    let endPage = currentPage + 1;
    if (startPage < 1) {
        startPage = 1;
        endPage = Math.min(3, totalPages);
    }
    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, totalPages - 2);
    }

    return (
        <>
            <div className="flex-1 flex flex-col justify-between gap-6">
                <div className="grid-auto">
                    {currentProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            name={product.name}
                            category={product.category}
                            price={product.price}
                            image={product.image}
                        />
                    ))}
                </div>
                {currentProducts.length === 0 && (
                    <div className="flex-1 flex items-center justify-center">
                        <p className="bg-white text-center text-accent p-4 rounded-xl">
                            No products found in this category.
                        </p>
                    </div>
                )}
                <Pagination
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    startPage={startPage}
                    endPage={endPage}
                />
            </div>
        </>
    );
}
