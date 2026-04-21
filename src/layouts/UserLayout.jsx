import NavBar from "/src/components/layout/NavBar";
import Footer from "/src/components/layout/Footer";
import { Outlet } from "react-router-dom";

export default function UserLayout() {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    );
}
