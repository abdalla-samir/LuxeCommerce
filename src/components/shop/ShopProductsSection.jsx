import { useState } from "react";
import Pagination from "./Pagination";
import ProductCard from "/src/components/ui/ProductCard";
import { products } from "/src/data/products";
import { ShopContext } from "/src/context/ShopContext";
import { useContext } from "react";
export default function ShopProductsSection() {
    const { subCategories, selectedCategory } = useContext(ShopContext);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;
    const filteredProducts = products.filter((product) => {
        if (selectedCategory === "all") {
            return true;
        } else {
            return (
                product.category.toLowerCase() ===
                selectedCategory.toLowerCase()
            );
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
