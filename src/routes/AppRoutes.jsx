import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/user/Home";
import UserLayout from "../layouts/UserLayout";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<UserLayout />}>
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
