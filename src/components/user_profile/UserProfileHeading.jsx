import Heading from "../ui/Heading";
export default function UserProfileHeading({ label }) {
    return (
        <div className="relative after:content-[''] after:h-1 after:w-20 max-sm:after:w-full after:bg-accent after:absolute after:left-0">
            <Heading label={label} headingLevel="heading-one" />
        </div>
    );
}
