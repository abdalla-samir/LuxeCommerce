import PersonalInformation from "./PersonalInformation";
import Security from "./Security";
export default function UserInformation() {
    return (
        <div className="flex-1 flex flex-col gap-6">
            <PersonalInformation />
            <Security />
        </div>
    );
}
