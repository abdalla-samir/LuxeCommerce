import SecurityIcon from "/src/assets/icons/lock.svg?react";
import InfoCard from "./InfoCard";
import Input from "../../ui/Input";
import VerficationIcon from "/src/assets/icons/verification.svg?react";
import { Switch } from "@/components/ui/switch";
export default function Security({ securityInputs, setSecurityInputs }) {
    return (
        <InfoCard headingIcon={SecurityIcon} headingLabel="Security">
            <Input
                label="Current Password"
                type="text"
                value={securityInputs.currentPassword}
                onChange={(event) =>
                    setSecurityInputs((prev) => ({
                        ...prev,
                        currentPassword: event.target.value,
                    }))
                }
                placeholder="••••••••••••"
            />
            <div className="flex gap-4">
                <Input
                    label="New Password"
                    type="password"
                    value={securityInputs.newPassword}
                    onChange={(event) =>
                        setSecurityInputs((prev) => ({
                            ...prev,
                            newPassword: event.target.value,
                        }))
                    }
                    placeholder="Min. 12 characters"
                />
                <Input
                    label="Confirm New Password"
                    type="password"
                    value={securityInputs.confirmNewPassword}
                    onChange={(event) =>
                        setSecurityInputs((prev) => ({
                            ...prev,
                            confirmNewPassword: event.target.value,
                        }))
                    }
                    placeholder="Repeat new password"
                />
            </div>
            <div className="flex items-center gap-4 bg-[#EFF4FF] p-4">
                <span className="p-4 flex items-center justify-center bg-white rounded">
                    <VerficationIcon />
                </span>
                <div className="flex-1">
                    <h3 className="text-lg font-bold text-primary">
                        Two-Factor Authentication
                    </h3>
                    <p className="text-sm text-secondary">
                        Add an extra layer of security to your account via SMS
                        or App.
                    </p>
                </div>
                <Switch
                    className="cursor-pointer"
                    checked={securityInputs.twoFactorAuth}
                    onCheckedChange={() =>
                        setSecurityInputs((prev) => ({
                            ...prev,
                            twoFactorAuth: !securityInputs.twoFactorAuth,
                        }))
                    }
                />
            </div>
        </InfoCard>
    );
}
