import Profile from "/src/assets/icons/profile.svg?react";
import Star from "/src/assets/icons/star_two.svg?react";

export default function FeedbackCard({ userName, position, message }) {
    return (
        <div className="bg-bg-main bg-4 flex flex-col gap-4 p-4 rounded-md shadow">
            <div className="flex">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
            </div>
            <p className={`italic before:content-['"'] after:content-['"']`}>
                {message}
            </p>
            <div className="flex items-center gap-2">
                <div className="p-2 rounded text-white bg-primary">
                    <Profile width={15} className="" />
                </div>
                <div className="flex-1 flex flex-col text-sm">
                    <span className="text-primary font-black">{userName}</span>
                    <span className="text-secondary text-xs">{position}</span>
                </div>
            </div>
        </div>
    );
}
