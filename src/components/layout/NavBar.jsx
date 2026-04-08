import { useState } from "react";
import Search from "/src/components/common/Search";
import WishListIcon from "/src/assets/icons/wishlist.svg?react";
import CartIcon from "/src/assets/icons/cart.svg?react";
import ProfileIcon from "/src/assets/icons/profile.svg?react";
import NavBarLinks from "/src/components/navbar/NavBarLinks";
import CategoryLinks from "/src/components/navbar/CategoryLinks";

export default function NavBar() {
    const [showCategoryLinks, setShowCategoryLinks] = useState(false);
    return (
        <div className="p-4 bg-bg-main shadow relative flex items-center">
            <h1 className="text-text-primary text-2xl font-bold">
                LuxeCommerce
            </h1>
            <NavBarLinks setShowCategoryLinks={setShowCategoryLinks} />
            <div className="flex gap-6 text-text-secondary">
                <Search placeHolder="Search curated luxury..." />
                <WishListIcon width={18} />
                <CartIcon width={18} />
                <ProfileIcon width={18} />
            </div>
            {showCategoryLinks && (
                <div className="absolute top-full left-0 w-full bg-bg-main z-50">
                    <CategoryLinks />
                </div>
            )}
        </div>
    );
}
