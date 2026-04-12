import FlashSale from "../../components/home/FlashSale";
import Categories from "/src/components/home/Categories";
import Hero from "/src/components/home/Hero";

export default function Home() {
    const sectionPadding = "p-10 py-15";
    return (
        <>
            <Hero />
            <Categories padding={sectionPadding} />
            <FlashSale padding={sectionPadding} />
        </>
    );
}
