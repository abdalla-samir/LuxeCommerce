import Button from "/src/components/common/Button";
import WishListIcon from "/src/assets/icons/wishlist.svg?react";

export default function CardMessage({
    label,
    buttonStyle,
    showMessage,
    showWishListIcon,
}) {
    return (
        <div
            className={`py-5 z-50 absolute w-full h-20  bottom-0 left-0 flex items-center justify-around  transition duration-300 ${showMessage ? "translate-y-0" : "translate-y-full"}`}
        >
            <Button label={label} style={buttonStyle} />
            {showWishListIcon && (
                <WishListIcon width={18} className="text-white" />
            )}
        </div>
    );
}
