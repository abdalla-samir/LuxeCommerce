import { Routes, Route, BrowserRouter } from "react-router-dom";
import UserLayout from "/src/layouts/UserLayout";
import AuthenticationLayout from "/src/layouts/AuthenticationLayout";
import Home from "../pages/user/Home";
import Shop from "../pages/user/Shop";
import SignIn from "../pages/user/SignIn";
import SignUp from "../pages/user/SignUp";
import ForgotPassword from "../pages/user/ForgotPassword";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<UserLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                </Route>
                <Route element={<AuthenticationLayout />}>
                    <Route path="auth/sign-in" element={<SignIn />} />
                    <Route path="auth/sign-up" element={<SignUp />} />
                    <Route
                        path="auth/forgot-password"
                        element={<ForgotPassword />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
