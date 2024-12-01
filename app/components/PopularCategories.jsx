import Image from "next/image";
import AllCategroies from "../../public/data/categories.json";
import AllRecipes from "../../public/data/recipes.json";
import Link from "next/link";

const PopularCategories = () => {
  const result = AllCategroies.map((category) => {
    const count = AllRecipes.filter(
      (recipe) => recipe.category_id === category.id
    ).length;
    return { ...category, recipeCount: count };
  });

  const sortMaxToLowResult = result.sort(
    (a, b) => b.recipeCount - a.recipeCount
  );

  return (
    <>
      <section className="mb-16">
        <div className="flex justify-between items-top">
          <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
          <Link href="/categories" className="text-orange-500">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {sortMaxToLowResult.slice(0, 6).map((recipe) => (
            <Link key={recipe.id} href={`/categories/${recipe.id}`}>
              <div  className="cursor-pointer text-center group">
              <div className="overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto">
                <Image
                  src={`/assets${recipe.image}`}
                  alt={recipe.name}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <p className="transition-transform duration-300 group-hover:scale-105">
                {recipe.name}
              </p>
            </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default PopularCategories;
