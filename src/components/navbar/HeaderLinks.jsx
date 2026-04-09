import InfoLinks from "./InfoLinks";
import PrimaryLinks from "./PrimaryLinks";

export default function HeaderLinks() {
    return (
        <>
            <ul className="text-text-muted flex items-center ml-6 max-lg:hidden gap-6 text-sm flex-1">
                <PrimaryLinks className="navbar-li" />
                <InfoLinks className="navbar-li" />
            </ul>
        </>
    );
}
