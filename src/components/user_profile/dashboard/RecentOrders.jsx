import Heading from "/src/components/ui/Heading";
import HeaderLink from "../../ui/HeaderLink";
import OrdersTable from "./OrdersTable";
export default function RecentOrders() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center max-sm:flex-col max-sm:items-center">
                <Heading label="Recent Orders" headingLevel="heading-two" />
                <HeaderLink to="/profile/my-orders" label="View All Orders" />
            </div>
            <OrdersTable />
        </div>
    );
}
