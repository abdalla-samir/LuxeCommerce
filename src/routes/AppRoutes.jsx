import { Routes, Route, BrowserRouter } from "react-router-dom";
import UserLayout from "/src/layouts/UserLayout";
import AuthenticationLayout from "/src/layouts/AuthenticationLayout";
import Home from "../pages/user/Home";
import Shop from "../pages/user/Shop";
import SignIn from "../pages/user/SignIn";
import SignUp from "../pages/user/SignUp";
import ForgotPassword from "../pages/user/ForgotPassword";
import ResetPassword from "../pages/user/ResetPassword";
import UserProfileLayout from "../layouts/UserProfileLayout";
import Settings from "/src/components/user_profile/settings/Settings";
import { StyleContext } from "../context/StyleContext";
import Dashboard from "../components/user_profile/dashboard/Dashboard";

export default function AppRoutes() {
    const mainButtonStyle =
        "cursor-pointer text-white bg-primary hover:bg-accent h-full text-xs p-3 font-bold";
    const secondaryButtonStyle =
        "cursor-pointer border hover:bg-accent-hover hover:text-white text-accent py-3 text-xs font-bold";
    return (
        <StyleContext.Provider
            value={{ mainButtonStyle, secondaryButtonStyle }}
        >
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
                        <Route
                            path="auth/reset-password"
                            element={<ResetPassword />}
                        />
                    </Route>
                    <Route element={<UserProfileLayout />}>
                        <Route
                            path="/profile/settings"
                            element={<Settings />}
                        />
                        <Route
                            path="/profile/dashboard"
                            element={<Dashboard />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </StyleContext.Provider>
    );
}
