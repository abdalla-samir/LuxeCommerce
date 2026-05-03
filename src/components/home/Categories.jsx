import Heading from "/src/components/ui/Heading";
import CategoriesCard from "/src/components/home/CategoriesCard";
import { categories } from "/src/data/categories";
import HeaderLink from "/src/components/ui/HeaderLink";

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
                <div className="text-primary flex max-sm:flex-col gap-2 justify-between items-center mb-4">
                    <Heading
                        label="Browse by Categories"
                        tag="Discover More"
                        headingLevel="heading-one"
                    />
                    <HeaderLink label="View All" to="/shop" />
                </div>
                <div className="grid-auto">{categoriesCards}</div>
            </div>
        </>
    );
}
