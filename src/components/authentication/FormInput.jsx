import { Link } from "react-router-dom";

export default function FormInput({
    label,
    icon,
    type,
    value,
    onChange,
    placeholder,
    name,
    className,
    forgotPasswordLink,
}) {
    return (
        <label className="flex flex-col gap-1 text-left text-primary">
            <div className="flex justify-between items-center uppercase">
                <span className="tracking-wider font-medium">{label}</span>
                {forgotPasswordLink && (
                    <Link to="/auth/forgot-password" className=" text-accent">
                        Forgot?
                    </Link>
                )}
            </div>
            <div className=" flex bg-[#EFF4FF] rounded ">
                <div className=" p-4 flex items-center justify-center border-r border-border">
                    {icon}
                </div>
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    name={name}
                    className={className}
                />
            </div>
        </label>
    );
}
