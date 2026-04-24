import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/src/components/ui/Logo";
import Button from "/src/components/common/Button";
import Email from "/src/assets/icons/email.svg?react";
import Password from "/src/assets/icons/password.svg?react";
import Google from "/src/assets/icons/google.svg?react";
import FormInput from "../../components/authentication/FormInput";
import AuthDivider from "../../components/authentication/AuthDivider";
import Heading from "../../components/ui/Heading";

export default function SignIn() {
    const inputStyle = "p-2 outline-none text-sm flex-1 placeholder:text-muted";
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <>
            <Heading
                label="LuxeCommerce"
                description="Enter your credentials to access your account"
            />

            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <FormInput
                    label="Email"
                    name="email"
                    icon={<Email className="w-4" />}
                    type="email"
                    value={formData.email}
                    onChange={(event) =>
                        setFormData((prev) => ({
                            ...prev,
                            email: event.target.value,
                        }))
                    }
                    placeholder="name@example.com"
                    className={`${inputStyle} `}
                />
                <FormInput
                    label="Password"
                    name="password"
                    icon={<Password className="w-4" />}
                    type="password"
                    value={formData.password}
                    forgotPasswordLink={true}
                    onChange={(event) =>
                        setFormData((prev) => ({
                            ...prev,
                            password: event.target.value,
                        }))
                    }
                    placeholder="..........................."
                    className={`${inputStyle} placeholder:text-muted`}
                />
                <Button
                    label="SIGN IN"
                    style="bg-primary text-white py-3 rounded w-full uppercase tracking-wider font-medium text-sm"
                />
            </form>
            <AuthDivider
                dividerLabel="or securely"
                socialLoginButtons={
                    <button className="border border-border p-4 rounded cursor-pointer text-sm">
                        <Google className="w-5 inline-block mr-2" />
                        <span>Continue with google</span>
                    </button>
                }
                footerLink="/auth/sign-up"
                footerLinkLabel="Sign up"
            />
        </>
    );
}
