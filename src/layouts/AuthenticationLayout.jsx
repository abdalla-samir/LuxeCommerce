import { Outlet } from "react-router-dom";
import Logo from "/src/components/ui/Logo";
import { ButtonStyleContext } from "../context/ButtonStyleContext";

export default function AuthenticationLayout() {
    const mainButtonStyle =
        "text-white bg-primary hover:bg-accent h-full text-xs font-bold";
    return (
        <ButtonStyleContext.Provider value={{ mainButtonStyle }}>
            <div className="h-screen flex items-center justify-center bg-bg-section p-4">
                <div className="bg-white w-180 text-center p-8 rounded-lg flex flex-col gap-4 text-xs">
                    <Outlet />
                </div>
            </div>
        </ButtonStyleContext.Provider>
    );
}
