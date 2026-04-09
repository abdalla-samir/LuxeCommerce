import { useEffect, useState } from "react";
import Search from "/src/components/common/Search";
import WishListIcon from "/src/assets/icons/wishlist.svg?react";
import CartIcon from "/src/assets/icons/cart.svg?react";
import ProfileIcon from "/src/assets/icons/profile.svg?react";
import HeaderLinks from "/src/components/navbar/HeaderLinks";
import CategoryLinks from "/src/components/navbar/CategoryLinks";
import BurgerIcon from "/src/assets/icons/burger.svg?react";
import SideBar from "/src/components/navbar/SideBar";
import Logo from "/src/components/navbar/Logo";
import { CategoryToggleContext } from "/src/context/CategoryToggleContext";

export default function NavBar() {
    const [showCategoryLinks, setShowCategoryLinks] = useState(false);
    const [showToggleBar, setShowToggleBar] = useState(false);
    const [showSideBar, setShowSideBar] = useState(false);
    const handleCategoriesToggle = () => {
        setShowCategoryLinks((prev) => !prev);
    };
    useEffect(() => {
        const media = window.matchMedia("(max-width: 1024px)");
        const handleResize = (event) => {
            setShowToggleBar(event.matches);
        };
        handleResize(media);
        media.addEventListener("change", handleResize);
        return () => media.removeEventListener("change", handleResize);
    }, []);
    return (
        <div className="p-4 h-15 bg-bg-main shadow relative flex justify-between items-center">
            <div className="flex items-center gap-2">
                {showToggleBar && (
                    <BurgerIcon
                        className="cursor-pointer"
                        onClick={() => setShowSideBar(true)}
                    />
                )}
                <div className="max-lg:hidden">
                    <Logo size="large" />
                </div>
            </div>
            <CategoryToggleContext.Provider value={{ handleCategoriesToggle }}>
                {showSideBar && <SideBar setShowSideBar={setShowSideBar} />}
                <HeaderLinks />
            </CategoryToggleContext.Provider>

            <div className="flex gap-6 text-text-secondary">
                <Search placeHolder="Search curated luxury..." />
                <div className="max-lg:hidden flex gap-6">
                    <WishListIcon width={18} />
                    <CartIcon width={18} />
                    <ProfileIcon width={18} />
                </div>
            </div>
            {showCategoryLinks && (
                <div className="absolute top-full left-0 w-full bg-bg-main z-50">
                    <CategoryLinks />
                </div>
            )}
        </div>
    );
}
