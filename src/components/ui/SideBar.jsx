import PanelIcon from "/src/assets/icons/panel.svg?react";
export default function SideBar({
    showSideBar,
    setShowSideBar,
    showToggleBar,
    children,
}) {
    return (
        <>
            <div
                className={`flex flex-col gap-4 text-sm shadow p-4 z-20 bg-bg-section transition w-70  top-0 left-0 bottom-0 ${showSideBar ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 absolute lg:relative`}
            >
                {children}
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
