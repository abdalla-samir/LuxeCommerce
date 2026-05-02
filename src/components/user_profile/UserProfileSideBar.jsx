import { useEffect, useState } from "react";
import SideBar from "../ui/SideBar";
import { Link } from "react-router-dom";
import { userProfileSideBar } from "../../data/userProfileSideBar";

export default function UserProfileSideBar() {
    const linkStyle =
        "p-2 text-primary w-full hover:bg-accent hover:text-white transition duration-150 cursor-pointer flex items-center gap-2";
    const [currentSideBarLink, setCurrentSideBarLink] = useState(() => {
        return window.localStorage.getItem("SideBarLink")
            ? window.localStorage.getItem("SideBarLink")
            : "Dashboard";
    });
    useEffect(() => {
        window.localStorage.setItem("SideBarLink", currentSideBarLink);
    }, [currentSideBarLink]);
    return (
        <SideBar>
            <ul className="space-y-4 max-lg:py-10">
                {userProfileSideBar.map((obj) => (
                    <li
                        key={obj.id}
                        onClick={() => setCurrentSideBarLink(obj.name)}
                    >
                        <Link
                            to={obj.href}
                            className={`${linkStyle} ${currentSideBarLink === obj.name ? "bg-accent text-white" : ""}`}
                        >
                            {obj.icon}
                            {obj.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </SideBar>
    );
}
