import { useState } from "react";
import Profile from "/src/assets/icons/profile.svg?react";
import Email from "/src/assets/icons/email.svg?react";
import Password from "/src/assets/icons/password.svg?react";
import ConfirmPassword from "/src/assets/icons/confirm-password.svg?react";
import Google from "/src/assets/icons/google.svg?react";
import Button from "/src/components/common/Button";
import FormInput from "../../components/authentication/FormInput";
import AuthDivider from "../../components/authentication/AuthDivider";

export default function SignUp() {
    const inputStyle = "p-2 outline-none text-sm flex-1";
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <>
            <p className="text-secondary tracking-widest uppercase -mt-4 ">
                Enter your credentials to access your account
            </p>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <FormInput
                    label="Full Name"
                    name="fullName"
                    icon={<Profile className="w-4" />}
                    type="text"
                    value={formData.fullName}
                    onChange={(event) =>
                        setFormData((prev) => ({
                            ...prev,
                            fullName: event.target.value,
                        }))
                    }
                    placeholder="Alexander Thorne"
                    className={`${inputStyle} placeholder:text-muted`}
                />
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
                    className={`${inputStyle} placeholder:text-muted`}
                />
                <FormInput
                    label="Password"
                    name="password"
                    icon={<Password className="w-4" />}
                    type="password"
                    value={formData.password}
                    onChange={(event) =>
                        setFormData((prev) => ({
                            ...prev,
                            password: event.target.value,
                        }))
                    }
                    placeholder="..........................."
                    className={`${inputStyle} placeholder:text-muted`}
                />
                <FormInput
                    label="Confirm Password"
                    name="confirmPassword"
                    icon={<ConfirmPassword className="w-4" />}
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(event) =>
                        setFormData((prev) => ({
                            ...prev,
                            confirmPassword: event.target.value,
                        }))
                    }
                    placeholder="..........................."
                    className={`${inputStyle} placeholder:text-muted`}
                />
                <Button
                    label="Create Account"
                    style="bg-primary text-white py-3 rounded w-full uppercase tracking-wider font-medium text-sm uppercase"
                />
            </form>
            <AuthDivider
                dividerLabel="or"
                socialLoginButtons={
                    <button className="border border-border p-4 rounded cursor-pointer text-sm">
                        <Google className="w-5 inline-block mr-2" />
                        <span>Sign up with google</span>
                    </button>
                }
                footerLink="/auth/sign-in"
                footerLinkLabel="Sign in"
            />
        </>
    );
}
