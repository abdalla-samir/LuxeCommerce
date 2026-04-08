import Arrow from "/src/assets/icons/arrow.svg?react";
export default function NavBar() {
    return (
        <div className="p-4 bg-bg-main shadow flex">
            <h1 className="text-text-primary text-2xl font-bold">
                LuxeCommerce
            </h1>
            <ul className="text-text-muted flex items-center gap-6 text-sm ml-6">
                <li className="navbar-li">Shop</li>
                <li className="navbar-li flex items-center gap-1">
                    Categories
                    <Arrow width={10} />
                </li>
                <li className="navbar-li">Deals</li>
                <li className="navbar-li">Journal</li>
                <li className="navbar-li">About</li>
            </ul>
        </div>
    );
}
