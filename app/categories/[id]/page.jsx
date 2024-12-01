"use client";
import Image from "next/image";
import allRecipes from "../../../public/data/recipes.json";
import allCategories from "../../../public/data/categories.json";

const RecipesPage = ({ params }) => {
  const modifiyArray = allRecipes.map((recipe) => {
    const category = allCategories.find(
      (category) => category.id === recipe.category_id
    );
    if (category) {
      return { ...recipe, categoryName: category.name };
    }
    return recipe;
  });

  const filterArr = modifiyArray.filter(
    (recipe) => recipe.category_id === params.id
  );

  return (
    <>
      <main className="container mx-auto px-4 py-8 mt-[100px]">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">
              {filterArr[0]?.categoryName}
              <span className="text-gray-500 text-2xl font-normal">
                ({filterArr?.length} Recipes)
              </span>
            </h1>
            <p className="text-gray-600">
              One thing I learned living in the Canarsie section of Brooklyn, NY
              was how to cook a good Italian meal. Here is a recipe I created
              after having this dish in a restaurant. Enjoy!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filterArr.map((recipe) => (
            <div
              key={recipe?.category_id}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={`/assets/thumbs/${recipe.thumbnail}`}
                width={300}
                height={100}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="font-semibold text-lg mb-2">{recipe.title}</h2>
              </div>
            </div>
          ))}
          {/* <!-- Repeat the above div structure for the remaining dessert items --> */}
        </div>
      </main>
    </>
  );
};

export default RecipesPage;
