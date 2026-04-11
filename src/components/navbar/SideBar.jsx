import Logo from "./Logo";
import Cross from "/src/assets/icons/cross.svg?react";
import AccountLinks from "/src/components/navbar/AccountLinks";
import UtilityLinks from "/src/components/navbar/UtilityLinks";
import PrimaryLinks from "./PrimaryLinks";
import InfoLinks from "./InfoLinks";

export default function SideBar({ setShowSideBar }) {
    return (
        <>
            <div className="w-70 fixed top-0 left-0 h-screen bg-bg-main flex flex-col shadow z-50">
                <div className="p-2 px-4 border-b h-15 border-border flex justify-between items-center">
                    <Logo size="small" />
                    <Cross
                        width={18}
                        className="cursor-pointer"
                        onClick={() => setShowSideBar(false)}
                    />
                </div>
                <div className="p-2 flex flex-1 flex-col min-h-0 gap-2">
                    <ul className="flex flex-col gap-2">
                        <AccountLinks />
                        <UtilityLinks />
                    </ul>
                    <ul className="border-y border-border py-2 flex-1 overflow-y-auto">
                        <PrimaryLinks variant="sidebar-li" />
                    </ul>
                    <ul>
                        <InfoLinks variant="sidebar-li" />
                    </ul>
                </div>
            </div>
            <span
                className="fixed top-0 left-0 z-30 w-full h-screen bg-bg-dark/40"
                onClick={() => setShowSideBar(false)}
            ></span>
        </>
    );
}
