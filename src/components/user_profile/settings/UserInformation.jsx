import { useContext, useState } from "react";
import PersonalInformation from "./PersonalInformation";
import Security from "./Security";
import Button from "/src/components/common/Button";
import { StyleContext } from "../../../context/StyleContext";

export default function UserInformation() {
    const { mainButtonStyle, secondaryButtonStyle } = useContext(StyleContext);
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
                <Button label="Cancel" style={secondaryButtonStyle} />
                <Button label="Save Changes" style={mainButtonStyle} />
            </div>
        </form>
    );
}
