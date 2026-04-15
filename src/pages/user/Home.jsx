import FlashSale from "/src/components/home/FlashSale";
import Categories from "/src/components/home/Categories";
import Hero from "/src/components/home/Hero";
import BestSellers from "/src/components/home/BestSellers";
import PromoBanner from "/src/components/home/PromoBanner";
import Brands from "/src/components/home/Brands";
import Testimonials from "../../components/home/Testimonials";

export default function Home() {
    const sectionPadding = "p-10 py-15";
    return (
        <>
            <Hero padding={sectionPadding} />
            <Categories padding={sectionPadding} />
            <FlashSale padding={sectionPadding} />
            <BestSellers padding={sectionPadding} />
            <PromoBanner padding={sectionPadding} />
            <Testimonials padding={sectionPadding} />
            <Brands padding={sectionPadding} />
        </>
    );
}
