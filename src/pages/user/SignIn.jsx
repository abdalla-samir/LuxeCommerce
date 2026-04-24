import Logo from "/src/components/ui/Logo";
import Email from "/src/assets/icons/email.svg?react";
import Password from "/src/assets/icons/password.svg?react";

export default function SignIn() {
    const inputStyle = {
        padding: "0.5rem",
        outline: "none",
        fontSize: "14px",
    };
    return (
        <div className="h-screen flex items-center justify-center bg-bg-section">
            <div className="bg-white w-180 text-center py-4 px-10 rounded-lg flex flex-col gap-6">
                <div>
                    <Logo style="text-3xl" />
                    <p className="text-secondary tracking-widest uppercase text-xs mt-2">
                        Enter your credentials to access your account.
                    </p>
                </div>
                <form>
                    <label className="flex flex-col gap-1 text-left ">
                        Email
                        <div className=" flex bg-[#EFF4FF] rounded">
                            <div className=" p-2 flex items-center justify-center border-r border-border">
                                <Email className=" w-4" />
                            </div>
                            <input
                                type="email"
                                name="email"
                                style={inputStyle}
                            />
                        </div>
                    </label>
                </form>
            </div>
        </div>
    );
}
