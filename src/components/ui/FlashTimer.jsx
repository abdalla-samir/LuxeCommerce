import { useEffect, useState } from "react";
import TimeBox from "/src/components/ui/TimeBox";

export default function FlashTimer({ endTime, styles, delimeterColor }) {
    const calculateTimeLeft = () => {
        const difference = new Date(endTime) - new Date();
        if (difference <= 0) {
            return {
                days: "00",
                hours: "00",
                minutes: "00",
                seconds: "00",
            };
        }
        return {
            days: String(
                Math.floor((difference / (1000 * 60 * 60 * 24)) % 24),
            ).padStart(2, "0"),
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
        <div className="flex items-center gap-1 text-center">
            <TimeBox
                label="DAYS"
                value={timeLeft.days}
                lastChild={false}
                styles={styles}
                delimeterColor={delimeterColor}
            />
            <TimeBox
                label="HRS"
                value={timeLeft.hours}
                lastChild={false}
                styles={styles}
                delimeterColor={delimeterColor}
            />
            <TimeBox
                label="MIN"
                value={timeLeft.minutes}
                lastChild={false}
                styles={styles}
                delimeterColor={delimeterColor}
            />
            <TimeBox
                label="SEC"
                value={timeLeft.seconds}
                lastChild={true}
                styles={styles}
                delimeterColor={delimeterColor}
            />
        </div>
    );
}
