import { useState } from "react";
import PersonalInformation from "./PersonalInformation";
import Security from "./Security";
import Button from "/src/components/common/Button";

export default function UserInformation() {
    const [personalInfoInputs, setPersonalInfoInputs] = useState({
        fullName: "",
        email: "",
        phoneNo: "",
    });
    const [securityInputs, setSecurityInputs] = useState({
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
        twoFactorAuth: false,
    });
    return (
        <form className="flex-1 flex flex-col gap-6">
            <PersonalInformation
                personalInfoInputs={personalInfoInputs}
                setPersonalInfoInputs={setPersonalInfoInputs}
            />
            <Security
                securityInputs={securityInputs}
                setSecurityInputs={setSecurityInputs}
            />
            <div className="flex justify-end gap-2 text-sm">
                <Button
                    label="Cancel"
                    style="border hover:border-accent hover:text-white hover:bg-accent p-3 rounded"
                />
                <Button
                    label="Save Changes"
                    style="bg-primary text-white hover:bg-accent p-3 rounded"
                />
            </div>
        </form>
    );
}
