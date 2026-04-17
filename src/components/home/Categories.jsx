import Heading from "/src/components/ui/Heading";
import CategoriesCard from "/src/components/home/CategoriesCard";
import { categories } from "/src/data/categories";

export default function Categories() {
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
            <div className="bg-bg-section section-padding">
                <div className="text-text-primary flex max-sm:flex-col gap-2 justify-between items-center mb-4">
                    <Heading label="Browse by Categories" tag="Discover More" />
                    <a
                        href="#"
                        className="border-b-2 w-fit border-border-dark text-sm font-bold"
                    >
                        View All
                    </a>
                </div>
                <div className="grid-auto">{categoriesCards}</div>
            </div>
        </>
    );
}
