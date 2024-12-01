"use client";
import Image from "next/image";
import allCategories from "../../public/data/categories.json";
import allRecipes from "../../public/data/recipes.json";
import Link from "next/link";

const RecommendedRecipe = ({ categoryName, title }) => {
  const findCategory = allCategories.find(
    (category) => category?.name === categoryName
  );

  const recommendRecipes = allRecipes.filter(
    (recipe) => recipe.category_id === findCategory.id
  );

  console.log(recommendRecipes, "this is the filered recipe");

  return (
    <>
      <section className="my-12">
        <h2 className="text-3xl font-bold mb-8">You might also like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {recommendRecipes.map((recipe, index) => (
            <Link key={index} href={`/${categoryName}/${recipe?.title}`}>
              <div>
                <Image
                  width={300}
                  height={100}
                  src={`/assets/thumbs/${recipe?.thumbnail}`}
                  alt="Recipe 1"
                  className="w-full h-60 object-cover rounded-lg mb-2"
                />
                <h3 className="font-semibold">{recipe.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default RecommendedRecipe;
