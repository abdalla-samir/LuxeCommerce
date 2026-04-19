import ShopProductsSection from "./ShopProductsSection";
import ShopContentHeader from "/src/components/shop/ShopContentHeader";
export default function ShopContent() {
    return (
        <>
            <div className="p-4 flex-1">
                <ShopContentHeader />
                <ShopProductsSection />
            </div>
        </>
    );
}
