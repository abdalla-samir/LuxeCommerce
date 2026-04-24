import { Outlet } from "react-router-dom";
import Logo from "/src/components/ui/Logo";
export default function AuthenticationLayout() {
    return (
        <div className="h-screen flex items-center justify-center bg-bg-section p-4">
            <div className="bg-white w-180 text-center p-8 rounded-lg flex flex-col gap-4 text-xs">
                <Logo style="text-3xl" />
                <Outlet />
            </div>
        </div>
    );
}
