import Image from "next/image";
import allRecipes from "../../public/data/recipes.json";
import allCategories from "../../public/data/categories.json";
import Link from "next/link";

const LatestRecipes = () => {
  // add categoryName in the recipes array by finding by the category id
  const modifiyArray = allRecipes.map((recipe) => {
    const category = allCategories.find(
      (category) => category.id === recipe.category_id
    );
    if (category) {
      return { ...recipe, categoryName: category.name };
    }
    return recipe;
  });

  // sort the recipe array by date
  const sortedRecipes = modifiyArray.sort(
    (a, b) => new Date(b.published_date) - new Date(a.published_date)
  );

  return (
    <>
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Latest Recipes</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {sortedRecipes.slice(0, 4).map((recipe) => (
            <Link
              key={recipe.category_id}
              href={`/${recipe.categoryName}/${recipe.title}`}
            >
              <div>
                <Image
                  width={400}
                  height={100}
                  src={`/assets/thumbs/${recipe.thumbnail}`}
                  alt="Strawberry Cream"
                  className="w-full h-[300px] object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{recipe.title}</h3>
                <p className="text-gray-600">{recipe.categoryName}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default LatestRecipes;
