export default function OrderRow({ id, date, status, total }) {
    const tableDataCellStyle = "p-4 border-b border-border";
    return (
        <tr>
            <td className={`${tableDataCellStyle} font-semibold`}>{id}</td>
            <td className={`${tableDataCellStyle} text-secondary`}>{date}</td>
            <td className={`${tableDataCellStyle} uppercase text-xs`}>
                <span
                    className={`p-1 rounded font-semibold ${status === "delivered" ? "bg-[#85F8C4] text-[#005137]" : status === "processing" ? "bg-[#FFDADA] text-accent" : ""}`}
                >
                    {status}
                </span>
            </td>
            <td className={`${tableDataCellStyle} font-black`}>${total}</td>
        </tr>
    );
}
