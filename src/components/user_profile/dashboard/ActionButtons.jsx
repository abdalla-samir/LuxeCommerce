import Button from "/src/components/common/Button";
import { StyleContext } from "/src/context/StyleContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
export default function ActionButtons() {
    const navigate = useNavigate();
    const { secondaryButtonStyle } = useContext(StyleContext);
    return (
        <div className="flex justify-center flex-wrap gap-6">
            <Button
                label="CONTINUE SHOPPING"
                style={secondaryButtonStyle}
                onClick={() => navigate("/shop")}
            />
            <Button
                label="VIEW ORDERS"
                style={secondaryButtonStyle}
                onClick={() => navigate("/profile/my-orders")}
            />
            <Button
                label="GO TO WISHLIST"
                style={secondaryButtonStyle}
                onClick={() => navigate("/profile/wishlist")}
            />
        </div>
    );
}
