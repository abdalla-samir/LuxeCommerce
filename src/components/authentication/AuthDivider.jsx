import { Link } from "react-router-dom";
export default function AuthDivider({
    dividerLabel,
    socialLoginButtons,
    footerLink,
    footerLinkLabel,
}) {
    return (
        <>
            <div className="relative">
                <span className="absolute w-full h-0.5 bg-bg-muted top-1/2 left-0 z-0"></span>
                <span className="relative z-10 bg-white p-2 uppercase">
                    {dividerLabel}
                </span>
            </div>
            <div className="flex flex-col gap-6">{socialLoginButtons}</div>
            <div className="text-sm">
                Don't have an account?{" "}
                <Link to={footerLink} className="text-accent font-medium">
                    {footerLinkLabel}
                </Link>
            </div>
        </>
    );
}
