import Heading from "../ui/Heading";
import UserProfileHeading from "./UserProfileHeading";
import UserInformation from "./settings/UserInformation";

export default function Settings() {
    return (
        <div className="flex-1 flex flex-col gap-6">
            <UserProfileHeading label="Account Settings" />
            <UserInformation />
        </div>
    );
}
