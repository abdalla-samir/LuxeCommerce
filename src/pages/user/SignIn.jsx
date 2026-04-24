import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/src/components/ui/Logo";
import Button from "/src/components/common/Button";
import Email from "/src/assets/icons/email.svg?react";
import Password from "/src/assets/icons/password.svg?react";
import Google from "/src/assets/icons/google.svg?react";

export default function SignIn() {
    const inputStyle = {
        padding: "8px",
        outline: "none",
        fontSize: "14px",
        flex: "1",
    };
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <div className="h-screen flex items-center justify-center bg-bg-section p-4">
            <div className="bg-white w-180 text-center p-10 rounded-lg flex flex-col gap-6 text-xs">
                <div>
                    <Logo style="text-3xl" />
                    <p className="text-secondary tracking-widest uppercase mt-2 ">
                        Enter your credentials to access your account
                    </p>
                </div>
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    <label className="flex flex-col gap-1 text-left text-primary">
                        <span className="uppercase tracking-wider font-medium">
                            Email
                        </span>
                        <div className=" flex bg-[#EFF4FF] rounded ">
                            <div className=" p-4 flex items-center justify-center border-r border-border">
                                <Email className="w-4" />
                            </div>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(event) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        email: event.target.value,
                                    }))
                                }
                                placeholder="name@example.com"
                                name="email"
                                style={inputStyle}
                                className="placeholder:text-muted"
                            />
                        </div>
                    </label>
                    <label className="flex flex-col gap-1 text-left text-primary">
                        <div className="flex justify-between items-center uppercase tracking-wider font-medium">
                            <span>Password</span>
                            <Link to="/forgot-password" className="text-accent">
                                Forgot?
                            </Link>
                        </div>
                        <div className=" flex bg-[#EFF4FF] rounded ">
                            <div className=" p-4 flex items-center justify-center border-r border-border">
                                <Password className="w-4" />
                            </div>
                            <input
                                type="password"
                                value={formData.password}
                                onChange={(event) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        password: event.target.value,
                                    }))
                                }
                                placeholder=".........................."
                                name="password"
                                style={inputStyle}
                                className="placeholder:text-muted placeholder:tracking-widest placeholder:text-"
                            />
                        </div>
                    </label>
                    <Button
                        label="SIGN IN"
                        style="bg-primary text-white py-3 rounded w-full uppercase tracking-wider font-medium text-sm"
                    />
                </form>
                <div className="relative">
                    <span className="absolute w-full h-0.5 bg-bg-muted top-1/2 left-0 z-0"></span>
                    <span className="relative z-10 bg-white p-2 uppercase">
                        or securely
                    </span>
                </div>
                <button className="border border-border p-4 rounded cursor-pointer text-sm">
                    <Google className="w-5 inline-block mr-2" />
                    <span>Continue with google</span>
                </button>
                <div className="text-sm">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-accent font-medium">
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    );
}
