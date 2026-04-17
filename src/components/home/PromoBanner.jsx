import PromoBannerImage from "/src/assets/images/promo_banner/promobanner.png";
export default function PromoBanner() {
    return (
        <div
            className="section-padding bg-bg-dark bg-cover text-white flex flex-col items-center gap-2 text-center"
            style={{ backgroundImage: `url(${PromoBannerImage})` }}
        >
            <h1 className="heading">Season End Sale: 60% OFF</h1>
            <p className="text-text-muted">
                Refresh your lifestyle with our curated clearance collection.
                Limited time only.
            </p>
            <a href="#" className="w-fit border-b-2 pb-1 border-white text-sm">
                Shop The Sale
            </a>
        </div>
    );
}
