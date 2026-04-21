import Button from "/src/components/common/Button";
export default function Pagination({
    currentPage,
    setCurrentPage,
    startPage,
    endPage,
}) {
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
                } max-w-10 p-2 rounded`}
                onClick={() => {
                    setCurrentPage(i);
                }}
            />,
        );
    }
    return <div className=" flex justify-center mt-10 gap-4">{buttons}</div>;
}
