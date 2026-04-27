import InfoCard from "./InfoCard";
import ProfileIcon from "/src/assets/icons/profile.svg?react";
import FormInput from "../../authentication/FormInput";
import Input from "../../ui/Input";

export default function PersonalInformation({
    personalInfoInputs,
    setPersonalInfoInputs,
}) {
    return (
        <InfoCard headingIcon={ProfileIcon} headingLabel="Personal Information">
            <Input
                label="Full Name"
                type="text"
                value={personalInfoInputs.fullName}
                onChange={(event) =>
                    setPersonalInfoInputs((prev) => ({
                        ...prev,
                        fullName: event.target.value,
                    }))
                }
                placeholder="Alexander Vance"
            />
            <Input
                label="Email Address"
                type="email"
                value={personalInfoInputs.email}
                onChange={(event) =>
                    setPersonalInfoInputs((prev) => ({
                        ...prev,
                        email: event.target.value,
                    }))
                }
                placeholder="alex.vance@vault-exclusive.com"
            />
            <Input
                label="Phone Number"
                type="text"
                value={personalInfoInputs.phoneNo}
                onChange={(event) =>
                    setPersonalInfoInputs((prev) => ({
                        ...prev,
                        phoneNo: event.target.value,
                    }))
                }
                placeholder="+1 (555) 892-0431"
            />
        </InfoCard>
    );
}
