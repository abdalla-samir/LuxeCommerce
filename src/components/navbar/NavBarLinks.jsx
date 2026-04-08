import Arrow from "/src/assets/icons/arrow.svg?react";

export default function NavBarLinks({ setShowCategoryLinks }) {
    return (
        <ul className="text-text-muted flex items-center gap-6 text-sm ml-6 flex-1">
            <li className="navbar-li">Shop</li>
            <li
                className="navbar-li flex items-center gap-1"
                onClick={() => setShowCategoryLinks((prev) => !prev)}
            >
                Categories
                <Arrow width={10} />
            </li>
            <li className="navbar-li">Deals</li>
            <li className="navbar-li">Journal</li>
            <li className="navbar-li">About</li>
        </ul>
    );
}
