import Heading from "/src/components/ui/Heading";
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
                    <Heading label="Browse by Category" />
                    <p className="text-text-secondary text-sm">
                        Curated selections across our flagship departments.
                    </p>
                </div>
                <div className="grid-4 ">{categoriesCards}</div>
            </div>
        </>
    );
}
