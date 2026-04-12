import Button from "/src/components/common/Button";

export default function Hero() {
    return (
        <div className="h-[calc(100vh-72px)] flex flex-col gap-2 justify-center bg-amber-800 p-10">
            <p className="text-text-muted tracking-widest">
                New Season Collection
            </p>
            <p className="text-5xl text-text-white">Elevate Your Every Day</p>
            <div className="flex gap-4 font-light">
                <Button label="Shop Collection" />
                <button className="w-50 py-4 rounded cursor-pointer border border-border backdrop-blur-sm hover:backdrop-blur-xs transition text-white">
                    View Lookbook
                </button>
            </div>
        </div>
    );
}
