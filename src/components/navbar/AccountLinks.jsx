import ProfileIcon from "/src/assets/icons/profile.svg?react";
export default function AccountLinks() {
    return (
        <li>
            <a href="#" className="sidebar-a">
                <ProfileIcon width={15} />
                <span>Sign in / Create account</span>
            </a>
        </li>
    );
}
