import CategoriesCard from "/src/components/home/CategoriesCard";
import { categories } from "/src/data/categories";

export default function Categories({ padding }) {
    const categoriesCards = categories.map((data) => (
        <CategoriesCard
            key={data.id}
            label={data.label}
            icon={data.icon}
            imagePath={data.image}
        />
    ));
    return (
        <>
            <div className={`bg-bg-section ${padding}`}>
                <div className="mb-10">
                    <h2 className="font-black text-xl tracking-tighter text-text-primary">
                        Browse by Category
                    </h2>
                    <p className="text-text-secondary text-sm">
                        Curated selections across our flagship departments.
                    </p>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 ">
                    {categoriesCards}
                </div>
            </div>
        </>
    );
}
