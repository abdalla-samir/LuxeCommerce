import FlashSale from "/src/components/home/FlashSale";
import Categories from "/src/components/home/Categories";
import Hero from "/src/components/home/Hero";
import BestSellers from "/src/components/home/BestSellers";
import PromoBanner from "/src/components/home/PromoBanner";
import Brands from "/src/components/home/Brands";
import Testimonials from "/src/components/home/Testimonials";

export default function Home() {
    return (
        <>
            <Hero />
            <Categories />
            <FlashSale />
            <BestSellers />
            <PromoBanner />
            <Testimonials />
            <Brands />
        </>
    );
}
