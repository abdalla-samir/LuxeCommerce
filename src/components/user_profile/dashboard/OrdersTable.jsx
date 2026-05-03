import OrderRow from "./OrderRow";
import { orders } from "/src/data/orders";
export default function OrdersTable() {
    const tableHeadStyle =
        "text-left p-4 text-xs uppercase text-primary whitespace-nowrap";
    return (
        <table className="  bg-white rounded w-full table-auto min-w-200">
            <thead>
                <tr className="border-b border-border">
                    <th className={tableHeadStyle}>Order Id</th>
                    <th className={tableHeadStyle}>Date</th>
                    <th className={tableHeadStyle}>Status</th>
                    <th className={tableHeadStyle}>Total</th>
                </tr>
            </thead>
            <tbody>
                {orders.map((obj) => (
                    <OrderRow
                        key={obj.id}
                        id={obj.id}
                        date={obj.date}
                        status={obj.status}
                        total={obj.total}
                    />
                ))}
            </tbody>
        </table>
    );
}
