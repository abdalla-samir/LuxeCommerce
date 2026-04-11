import Logo from "/src/components/ui/Logo";

export default function Footer() {
    const styles = {
        ul: "flex flex-col gap-2  text-sm",
        ulContainer: "flex flex-col gap-2",
        li: "text-text-muted text-xs",
    };
    return (
        <div className="bg-bg-dark min-h-96 p-4 flex flex-col">
            <div className="flex-1 flex items-center">
                <div className="my-10 flex-1 grid gap-12  lg:grid-cols-4 md:grid-cols-2 max-md:text-center">
                    <div className={`${styles.ulContainer}`}>
                        <Logo style="text-lg text-white" />
                        <p className="text-[#9EADC5] text-sm">
                            Redefining the digital shopping experience through a
                            lens of curated luxury and architectural excellence.
                        </p>
                    </div>
                    <div className={`${styles.ulContainer}`}>
                        <h3 className="text-white font-light">Navigation</h3>
                        <ul className={`${styles.ul}`}>
                            <li className={`${styles.li}`}>
                                <a href="#">Shop All</a>
                            </li>
                            <li className={`${styles.li}`}>
                                <a href="#">New Arrivals</a>
                            </li>
                            <li className={`${styles.li}`}>
                                <a href="#">The Journal</a>
                            </li>
                            <li className={`${styles.li}`}>
                                <a href="#">Our Story</a>
                            </li>
                        </ul>
                    </div>
                    <div className={`${styles.ulContainer}`}>
                        <h3 className="text-white font-light">
                            CLIENT SERVICE
                        </h3>
                        <ul className={`${styles.ul}`}>
                            <li className={`${styles.li}`}>
                                <a href="#">Track Order</a>
                            </li>
                            <li className={`${styles.li}`}>
                                <a href="#">Returns & Exchanges</a>
                            </li>
                            <li className={`${styles.li}`}>
                                <a href="#">Sustainability Policy</a>
                            </li>
                            <li className={`${styles.li}`}>
                                <a href="#">Contact Concierge</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2 ">
                        <h3 className="text-white font-extralight">LEGAL</h3>
                        <ul className={`${styles.ul}`}>
                            <li className={`${styles.li}`}>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li className={`${styles.li}`}>
                                <a href="#">Terms of Service</a>
                            </li>
                            <li className={`${styles.li}`}>
                                <a href="#">Cookie Settings</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="py-10 text-center border-t border-[#9EADC5]">
                <p className="text-text-muted text-xs">
                    &copy; 2024 LUXECOMMERCE. All Rights Reserved.
                </p>
                <div className="text-text-muted text-xs mt-1 space-x-2">
                    <a href="#">INSTAGRAM</a>
                    <a href="#">TWITTER</a>
                    <a href="#">LINKEDIN</a>
                </div>
            </div>
        </div>
    );
}
