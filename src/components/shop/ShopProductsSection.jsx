import ProductCard from "/src/components/ui/ProductCard";
import { products } from "/src/data/products";
export default function ShopProductsSection() {
    const productsArray = products.map((product) => (
        <ProductCard
            name={product.name}
            category={product.category}
            price={product.price}
            image={product.image}
        />
    ));

    return (
        <>
            <div className="grid-auto">{productsArray}</div>
        </>
    );
}
