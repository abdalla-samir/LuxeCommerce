import { Routes, Route, BrowserRouter } from "react-router-dom";
import UserLayout from "/src/layouts/UserLayout";
import Home from "../pages/user/Home";
import Shop from "../pages/user/Shop";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<UserLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
