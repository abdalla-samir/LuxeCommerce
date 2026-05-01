import Button from "/src/components/common/Button";
import Arrow from "/src/assets/icons/arrow.svg?react";
import { useEffect } from "react";

export default function Pagination({
    currentPage,
    setCurrentPage,
    startPage,
    endPage,
}) {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [currentPage]);
    const buttons = [];
    for (let i = startPage; i <= endPage; i++) {
        buttons.push(
            <Button
                key={i}
                label={i}
                style={`${
                    i === currentPage
                        ? "bg-primary text-white"
                        : "bg-muted text-white"
                } cursor-pointer max-w-10 p-2 rounded hover:bg-primary`}
                onClick={() => {
                    setCurrentPage(i);
                }}
            />,
        );
    }
    return (
        <div className="flex justify-center gap-4">
            <Button
                label={<Arrow className="rotate-90 w-4 " />}
                style={`bg-muted text-white p-2 rounded max-w-10 flex items-center justify-center ${currentPage === startPage ? "opacity-50 cursor-not-allowed" : "hover:bg-primary cursor-pointer"}`}
                onClick={() => {
                    setCurrentPage((prev) => Math.max(prev - 1, startPage));
                }}
                disabled={currentPage === startPage}
            />
            {buttons}
            <Button
                label={<Arrow className="-rotate-90 w-4 " />}
                style={`bg-muted text-white p-2 rounded max-w-10 flex items-center justify-center ${currentPage === endPage ? "opacity-50 cursor-not-allowed" : "hover:bg-primary cursor-pointer"}`}
                onClick={() => {
                    setCurrentPage((prev) => Math.min(endPage, prev + 1));
                }}
                disabled={currentPage === endPage}
            />
        </div>
    );
}
