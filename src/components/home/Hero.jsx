import Button from "/src/components/common/Button";
import HeroImage from "/src/assets/images/hero/Hero.png";
import FlashTimer from "/src/components/ui/FlashTimer";
import { StyleContext } from "../../context/StyleContext";
import { useContext } from "react";

export default function Hero() {
    const { mainButtonStyle, secondaryButtonStyle } = useContext(StyleContext);

    return (
        <div className="min-h-[calc(100vh-72px)] flex max-md:flex-col gap-4 justify-between items-center section-padding">
            <div className="flex flex-col justify-between items-center gap-2 md:items-start max-md:order-2 max-md:text-center w-1/2">
                <span className="bg-accent p-2 rounded text-xs text-white font-black uppercase ">
                    Limited Offer
                </span>
                <p className="heading font-black text-primary">
                    Zenith Smart Watch S
                </p>
                <p className="text-primary font-light">
                    Engineered for the discerning. A fusion of aerospace-grade
                    titanium and precision sensor arrays. Luxury is no longer
                    just observed—it's measured.
                </p>
                <div className="flex items-center gap-4">
                    <span className="text-3xl text-primary font-bold">
                        $349.00
                    </span>
                    <span className="text-muted line-through ">$420.00</span>
                </div>
                <div className="flex gap-2 max-md:flex-col">
                    <Button label="ADD TO CART" style={mainButtonStyle} />
                    <Button label="VIEW DETAILS" style={secondaryButtonStyle} />
                </div>
                <div className="max-md:text-center">
                    <span className="text-muted text-sm mb-2 block">
                        DEAL ENDS IN
                    </span>
                    <FlashTimer
                        endTime="2026-05-01T00:00:00"
                        styles="bg-bg-section"
                        delimeterColor="text-black"
                    />
                </div>
            </div>
            <div className="w-100 h-100 overflow-hidden">
                <img src={HeroImage} alt="" />
            </div>
        </div>
    );
}
