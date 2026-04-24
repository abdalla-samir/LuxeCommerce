import Heading from "../../components/ui/Heading";
import FormInput from "../../components/authentication/FormInput";
import Email from "/src/assets/icons/email.svg?react";
import Button from "../../components/common/Button";
import { ButtonStyleContext } from "../../context/ButtonStyleContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import BackIcon from "/src/assets/icons/back.svg?react";

export default function ForgotPassword() {
    const [inputValue, setInputValue] = useState("");
    const { mainButtonStyle } = useContext(ButtonStyleContext);
    return (
        <>
            <Heading
                label="Forgot Password"
                description="Enter your email address and we'll send you a link to
reset your password."
            />
            <form className="flex flex-col gap-6">
                <FormInput
                    label="Email"
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                    name="email"
                    icon={<Email className="w-4" />}
                    type="email"
                    placeholder="name@example.com"
                    className="p-2 outline-none text-sm flex-1 placeholder:text-muted"
                />
                <Button
                    label="Send Reset Link"
                    style={`${mainButtonStyle} w-full py-4 shadow`}
                />
            </form>
            <div className=" pt-6 border-t border-border">
                <Link
                    to="/auth/sign-in"
                    className="uppercase text-xs text-accent flex items-center justify-center gap-2"
                >
                    <BackIcon className="w-4 inline-block" />
                    Return To Sign in
                </Link>
            </div>
        </>
    );
}
