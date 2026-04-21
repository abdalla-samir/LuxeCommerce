export default function CategoryLinks({ variant }) {
    const ulStyles = {
        navbar: "absolute top-full left-0 w-full text-sm bg-bg-main",
        sidebar: "ml-2 text-xs",
    };
    return (
        <>
            <ul
                className={`text-text-dark  ${variant === "navbar-li" ? ulStyles.navbar : variant === "sidebar-li" ? ulStyles.sidebar : ""}`}
            >
                <li
                    className={`${variant === "navbar-li" ? "navbar-category-li" : variant === "sidebar-li" ? "sidebar-category-li" : ""}`}
                >
                    Fashion
                </li>
                <li
                    className={`${variant === "navbar-li" ? "navbar-category-li" : variant === "sidebar-li" ? "sidebar-category-li" : ""}`}
                >
                    Electronics
                </li>
                <li
                    className={`${variant === "navbar-li" ? "navbar-category-li" : variant === "sidebar-li" ? "sidebar-category-li" : ""}`}
                >
                    Mobile
                </li>
                <li
                    className={`${variant === "navbar-li" ? "navbar-category-li" : variant === "sidebar-li" ? "sidebar-category-li" : ""}`}
                >
                    Accessories
                </li>
                <li
                    className={`${variant === "navbar-li" ? "navbar-category-li" : variant === "sidebar-li" ? "sidebar-category-li" : ""}`}
                >
                    Home & Living
                </li>
                <li
                    className={`${variant === "navbar-li" ? "navbar-category-li" : variant === "sidebar-li" ? "sidebar-category-li" : ""}`}
                >
                    Beauty
                </li>
                <li
                    className={`${variant === "navbar-li" ? "navbar-category-li" : variant === "sidebar-li" ? "sidebar-category-li" : ""}`}
                >
                    Sports
                </li>
                <li
                    className={`${variant === "navbar-li" ? "navbar-category-li" : variant === "sidebar-li" ? "sidebar-category-li" : ""}`}
                >
                    Gaming
                </li>
            </ul>
        </>
    );
}
