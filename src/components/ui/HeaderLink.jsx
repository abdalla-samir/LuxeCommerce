import { Link } from "react-router-dom";
export default function HeaderLink({ to, label }) {
    return (
        <Link to={to} className="text-accent text-xs uppercase font-semibold">
            {label}
        </Link>
    );
}
