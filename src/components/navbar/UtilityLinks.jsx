import WishList from "/src/assets/icons/wishlist.svg?react";
import Cart from "/src/assets/icons/cart.svg?react";

export default function UtilityLinks() {
    return (
        <>
            <li>
                <a href="#" className="sidebar-a">
                    <WishList width={15} />
                    <span>WishList</span>
                </a>
            </li>
            <li>
                <a href="#" className="sidebar-a">
                    <Cart width={15} />
                    <span>Cart</span>
                </a>
            </li>
        </>
    );
}
