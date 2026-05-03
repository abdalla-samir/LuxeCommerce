import UserProfileHeading from "../UserProfileHeading";
import ActionButtons from "./ActionButtons";
import RecentOrders from "./RecentOrders";
import SummeryCards from "./SummaryCards";
export default function Dashboard() {
    return (
        <div className="flex-1 flex flex-col gap-6">
            <UserProfileHeading label="Dashboard" />
            <SummeryCards />
            <ActionButtons />
            <RecentOrders />
        </div>
    );
}
