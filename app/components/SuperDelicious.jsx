"use client";
import Image from "next/image";
import allRecipes from "../../public/data/recipes.json";
import allCategories from "../../public/data/categories.json";
import Ratting from "./Ratting";
import Link from "next/link";

const SuperDelicious = () => {
  const modifiyArray = allRecipes.map((recipe) => {
    const category = allCategories.find(
      (category) => category.id === recipe.category_id
    );
    if (category) {
      return { ...recipe, categoryName: category.name };
    }
    return recipe;
  });

  const maxRattingRecipes = modifiyArray.filter(
    (recipes) => recipes?.rating?.average_rating >= 4.7
  );

  return (
    <>
      <section className="mb-16" id="super_delicious">
        <h2 className="text-3xl font-bold mb-8">Super Delicious</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {maxRattingRecipes?.length > 0 &&
            maxRattingRecipes?.slice(0, 3).map((recipe) => (
              <Link
                key={recipe.category_id}
                href={`/${recipe.categoryName}/${recipe.title}`}
              >
                <div>
                  <Image
                    width={300}
                    height={100}
                    src={`/assets/thumbs/${recipe?.thumbnail}`}
                    alt="Chicken Meatball with Creamy Cheese"
                    className="w-full h-[300px] object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    {recipe?.title}
                  </h3>
                  <div className="flex items-center text-yellow-500 mb-2">
                    <Ratting value={recipe?.rating?.average_rating} />
                  </div>
                  <p className="text-gray-600">{recipe?.cooking_time}</p>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </>
  );
};

export default SuperDelicious;
