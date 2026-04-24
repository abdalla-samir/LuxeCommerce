import { Routes, Route, BrowserRouter } from "react-router-dom";
import UserLayout from "/src/layouts/UserLayout";
import Home from "../pages/user/Home";
import Shop from "../pages/user/Shop";
import SignIn from "../pages/user/SignIn";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<UserLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                </Route>
                <Route path="/sign-in" element={<SignIn />} />
            </Routes>
        </BrowserRouter>
    );
}
