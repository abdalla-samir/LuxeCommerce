import { useEffect, useState } from "react";
import PanelIcon from "/src/assets/icons/panel.svg?react";
import Cross from "/src/assets/icons/cross.svg?react";
export default function SideBar({ children }) {
    const [showSideBar, setShowSideBar] = useState(false);
    const [showToggleBar, setShowToggleBar] = useState(false);
    useEffect(() => {
        const media = window.matchMedia("(max-width: 1024px)");
        const handleResize = (event) => {
            const matches = event.matches;
            setShowToggleBar(matches);
            setShowSideBar(!matches);
        };
        handleResize({ matches: media.matches });
        media.addEventListener("change", handleResize);
        return () => media.removeEventListener("change", handleResize);
    }, []);
    return (
        <>
            <div
                className={`flex flex-col gap-4 text-sm shadow p-4 z-20 bg-bg-section transition duration-300 w-70  top-0 left-0 bottom-0  ${showSideBar ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 absolute lg:relative`}
            >
                {children}
                {showToggleBar && (
                    <Cross
                        className="w-4 h-4 cursor-pointer text-primary hover:text-secondary transition absolute top-5 right-5"
                        onClick={() => setShowSideBar(!showSideBar)}
                    />
                )}
            </div>
            {showSideBar && showToggleBar && (
                <div
                    className="absolute w-screen min-h-[calc(100vh-132px)] top-0 left-0 bottom-0 right-0 z-10 bg-black/20"
                    onClick={() => setShowSideBar(false)}
                ></div>
            )}
            {showToggleBar && (
                <div className="shadow">
                    <PanelIcon
                        className={`m-4 w-5 h-5 text-primary hover:text-secondary cursor-pointer transition duration-200 `}
                        onClick={() => setShowSideBar(!showSideBar)}
                    />
                </div>
            )}
        </>
    );
}
