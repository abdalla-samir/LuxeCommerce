export default function Logo({ size }) {
    return (
        <h1
            className={`text-text-primary ${size === "large" ? "text-2xl" : size === "small" ? "text-xl" : ""} font-bold`}
        >
            LuxeCommerce
        </h1>
    );
}
