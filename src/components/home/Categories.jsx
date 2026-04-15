import Heading from "/src/components/ui/Heading";
import CategoriesCard from "/src/components/home/CategoriesCard";
import { categories } from "/src/data/categories";

export default function Categories({ padding }) {
    const categoriesCards = categories.map((obj) => (
        <CategoriesCard
            key={obj.id}
            label={obj.label}
            tag={obj.tag}
            icon={obj.icon}
            imagePath={obj.image}
        />
    ));
    return (
        <>
            <div className={`bg-bg-section ${padding}`}>
                <div className="mb-10">
                    <Heading label="Browse by Categories" tag="Discover More" />
                </div>
                <div className="grid-4">{categoriesCards}</div>
            </div>
        </>
    );
}
