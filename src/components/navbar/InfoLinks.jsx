import { Link } from "react-router-dom";
export default function InfoLinks({ variant }) {
    return (
        <>
            <li className={`${variant}`}>
                <Link to="/journal">Journal</Link>
            </li>
            <li className={`${variant}`}>
                <Link to="/about">About</Link>
            </li>
        </>
    );
}
