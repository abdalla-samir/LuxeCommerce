import { useEffect, useState } from "react";
import TimeBox from "/src/components/ui/TimeBox";

export default function FlashTimer({ endTime }) {
    const calculateTimeLeft = () => {
        const difference = new Date(endTime) - new Date();
        if (difference <= 0) {
            return {
                hours: "00",
                minutes: "00",
                seconds: "00",
            };
        }
        return {
            hours: String(
                Math.floor((difference / (1000 * 60 * 60)) % 24),
            ).padStart(2, "0"),
            minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
                2,
                "0",
            ),
            seconds: String(Math.floor((difference / 1000) % 60)).padStart(
                2,
                "0",
            ),
        };
    };
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    });
    return (
        <div className="flex gap-2 text-center">
            <TimeBox label="HRS" value={timeLeft.hours} />
            <TimeBox label="MIN" value={timeLeft.minutes} />
            <TimeBox label="SEC" value={timeLeft.seconds} />
        </div>
    );
}
