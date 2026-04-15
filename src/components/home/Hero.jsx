import Button from "/src/components/common/Button";
import HeroImage from "/src/assets/images/hero/Hero.png";
import FlashTimer from "/src/components/ui/FlashTimer";

export default function Hero({ padding }) {
    const buttonsStyle = {
        buttonOne:
            "text-white bg-primary hover:bg-accent-hover py-3 text-xs font-bold",
        buttonTwo:
            "border hover:bg-accent-hover hover:text-white text-accent py-3 text-xs font-bold",
    };
    return (
        <div
            className={`min-h-[calc(100vh-72px)] flex max-md:flex-col gap-4 justify-between items-center ${padding} `}
        >
            <div className="flex flex-col justify-between items-center gap-2 md:items-start max-md:order-2 max-md:text-center w-1/2">
                <span className="bg-accent p-2 rounded text-xs text-white font-black uppercase ">
                    Limited Offer
                </span>
                <p className="text-3xl md:text-4xl lg:text-7xl font-black text-text-primary">
                    Zenith Smart Watch S
                </p>
                <p className="text-text-primary font-light">
                    Engineered for the discerning. A fusion of aerospace-grade
                    titanium and precision sensor arrays. Luxury is no longer
                    just observed—it's measured.
                </p>
                <div className="flex items-center gap-4">
                    <span className="text-3xl text-text-primary font-bold">
                        $349.00
                    </span>
                    <span className="text-text-muted line-through ">
                        $420.00
                    </span>
                </div>
                <div className="flex gap-2 max-md:flex-col">
                    <Button
                        label="ADD TO CART"
                        style={buttonsStyle.buttonOne}
                    />
                    <Button
                        label="VIEW DETAILS"
                        style={buttonsStyle.buttonTwo}
                    />
                </div>
                <div className="max-md:text-center">
                    <span className="text-text-muted text-sm mb-2 block">
                        DEAL ENDS IN
                    </span>
                    <FlashTimer endTime="2026-05-01T00:00:00" />
                </div>
            </div>
            <div className=" max-w-110 max-md:w-90  md:bg-bg-section rounded-md flex justify-center items-center max-md:order-1">
                <img src={HeroImage} alt="" />
            </div>
        </div>
    );
}
