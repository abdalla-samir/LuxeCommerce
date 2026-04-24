import Heading from "../../components/ui/Heading";
import FormInput from "../../components/authentication/FormInput";
import { useState, useContext } from "react";
import Password from "/src/assets/icons/password.svg?react";
import Button from "../../components/common/Button";
import { ButtonStyleContext } from "../../context/ButtonStyleContext";
import AuthDivider from "../../components/authentication/AuthDivider";
import { Link } from "react-router-dom";

export default function ResetPassword() {
    const { mainButtonStyle } = useContext(ButtonStyleContext);
    const inputStyle = "p-2 outline-none text-sm flex-1 placeholder:text-muted";
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    });
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <>
            <Heading
                label="Reset password"
                description="CREATE A NEW PASSWORD FOR YOUR ACCOUNT."
            />
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <FormInput
                    label="New Password"
                    icon={<Password className="w-4" />}
                    type="Password"
                    value={formData.password}
                    onChange={(event) =>
                        setFormData((prev) => ({
                            ...prev,
                            password: event.target.value,
                        }))
                    }
                    placeholder="••••••••••••••••••••••••"
                    name="password"
                    className={`${inputStyle}`}
                />
                <FormInput
                    label="Confirm Password"
                    icon={<Password className="w-4" />}
                    type="Password"
                    value={formData.confirmPassword}
                    onChange={(event) =>
                        setFormData((prev) => ({
                            ...prev,
                            confirmPassword: event.target.value,
                        }))
                    }
                    placeholder="••••••••••••••••••••••••"
                    name="confirmPassword"
                    className={`${inputStyle}`}
                />
                <Button
                    label="Update Password"
                    style={`${mainButtonStyle} py-4 w-full`}
                />
                <div className=" pt-6 border-t border-border flex items-center justify-center gap-1 text-sm">
                    Remembered your password?
                    <Link to="/auth/sign-in" className=" text-accent">
                        Sign In
                    </Link>
                </div>
            </form>
        </>
    );
}
