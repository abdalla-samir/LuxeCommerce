import FlashSale from "/src/components/home/FlashSale";
import Categories from "/src/components/home/Categories";
import Hero from "/src/components/home/Hero";
import BestSellers from "/src/components/home/BestSellers";
import PromoBanner from "/src/components/home/PromoBanner";
import Brands from "/src/components/home/Brands";
import Testimonials from "/src/components/home/Testimonials";
import { ButtonStyleContext } from "../../context/ButtonStyleContext";

export default function Home() {
    const sectionPadding = "p-5 md:py-15 max-sm:py-10";
    const mainButtonStyle =
        "text-white bg-primary hover:bg-accent h-full text-xs font-bold";
    return (
        <>
            <ButtonStyleContext.Provider value={{ mainButtonStyle }}>
                <Hero padding={sectionPadding} />
                <Categories padding={sectionPadding} />
                <FlashSale padding={sectionPadding} />
                <BestSellers padding={sectionPadding} />
                <PromoBanner padding={sectionPadding} />
                <Testimonials padding={sectionPadding} />
                <Brands padding={sectionPadding} />
            </ButtonStyleContext.Provider>
        </>
    );
}
