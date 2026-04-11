export default function Hero() {
    return (
        <div className="h-[calc(100vh-72px)] flex flex-col gap-2 justify-center bg-[url(/src/assets/images/Hero.png)] bg-contain bg-no-repeat p-10">
            <p className="text-text-muted tracking-widest">
                New Season Collection
            </p>
            <p className="text-5xl text-text-white">Elevate Your Every Day</p>
            <div className="flex gap-4 font-light">
                <button className="bg-[#233348] hover:bg-bg-dark w-50 py-4 rounded cursor-pointer text-white transition duration-200">
                    Shop Collection
                </button>
                <button className="w-50 py-4 rounded cursor-pointer border border-border backdrop-blur-sm hover:backdrop-blur-xs transition text-white">
                    View Lookbook
                </button>
            </div>
        </div>
    );
}
