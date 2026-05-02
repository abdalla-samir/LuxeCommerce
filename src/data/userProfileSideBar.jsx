import DashboardIcon from "/src/assets/icons/dashboard.svg?react";
import ShopIcon from "/src/assets/icons/shop.svg?react";
import WishListIcon from "/src/assets/icons/wishlist.svg?react";
import SettingsIcon from "/src/assets/icons/settings.svg?react";
import BillingIcon from "/src/assets/icons/billing.svg?react";

export const userProfileSideBar = [
    {
        id: 1,
        name: "Dashboard",
        icon: <DashboardIcon width={18} />,
        href: "/profile/dashboard",
    },
    {
        id: 2,
        name: "My Orders",
        icon: <ShopIcon width={18} />,
        href: "/profile/my-orders",
    },
    {
        id: 3,
        name: "WishList",
        icon: <WishListIcon width={18} />,
        href: "/profile/wishlist",
    },
    {
        id: 4,
        name: "Settings",
        icon: <SettingsIcon width={18} />,
        href: "/profile/settings",
    },
    {
        id: 5,
        name: "Billing",
        icon: <BillingIcon width={18} />,
        href: "/profile/billing",
    },
];
