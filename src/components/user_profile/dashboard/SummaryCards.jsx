import { summaryData } from "../../../data/summaryData";
import SummeryCard from "./SummeryCard";
export default function SummeryCards() {
    return (
        <div className="grid xl:grid-cols-4 lg:grid-cols-2  gap-6">
            {summaryData.map((obj) => (
                <SummeryCard
                    title={obj.title}
                    value={obj.value}
                    icon={obj.icon}
                />
            ))}
        </div>
    );
}
