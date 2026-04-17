import Heading from "/src/components/ui/Heading";
import FeedbackCard from "/src/components/home/FeedbackCard";
import { feedbacksData } from "/src/data/feedbacks";

export default function Testimonials() {
    const feedbacks = feedbacksData.map((obj) => (
        <FeedbackCard
            key={obj.id}
            userName={obj.userName}
            position={obj.position}
            message={obj.message}
        />
    ));
    return (
        <div className="section-padding bg-bg-section">
            <div className="text-center mb-4">
                <Heading label="The Luxe Standard" />
                <p className="text-accent text-sm">
                    Trusted by collectors and design enthusiasts worldwide.
                </p>
            </div>
            <div className="grid-auto">{feedbacks}</div>
        </div>
    );
}
