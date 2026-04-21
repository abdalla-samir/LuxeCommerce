import Button from "/src/components/common/Button";
export default function Pagination() {
    return (
        <div className=" flex justify-center mt-10 gap-4">
            <Button
                label="1"
                style="bg-muted text-white max-w-10 p-2 rounded"
            />
            <Button
                label="2"
                style="bg-primary text-white max-w-10 p-2 rounded"
            />
            <Button
                label="3"
                style="bg-muted text-white max-w-10 p-2 rounded"
            />
        </div>
    );
}
