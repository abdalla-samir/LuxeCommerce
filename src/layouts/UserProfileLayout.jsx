import { Outlet } from "react-router-dom";
import NavBar from "/src/components/layout/NavBar";
import UserProfileSideBar from "/src/components/user_profile/UserProfileSideBar";

export default function UserProfileLayout() {
    return (
        <>
            <NavBar />
            <div className="relative flex gap-2 min-h-[calc(100vh-72px)] bg-bg-section ">
                <UserProfileSideBar />
                <div className="p-4 flex-1 flex flex-col gap-6">
                    <Outlet />
                </div>
            </div>
        </>
    );
}
