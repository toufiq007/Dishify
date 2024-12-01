"use client";
import Image from "next/image";
import Link from "next/link";
import allRecipes from "../../public/data/recipes.json";
import allCategories from "../../public/data/categories.json";
  
const Banner = () => {
  const allRecipesWithCategoryName = allRecipes.map((recipe) => {
    const category = allCategories.find(
      (category) => category.id === recipe.category_id
    );
    if (category) {
      return { ...recipe, categoryName: category.name };
    }
    return recipe;
  });

  console.log(allRecipesWithCategoryName, "with category name");

  return (
    <>
      <section className="mb-16 bg-orange-50">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Link
            href={`/${allRecipesWithCategoryName[0]?.categoryName}/${allRecipesWithCategoryName[0]?.title}`}
          >
            <div>
              <Image
                src={`/assets/thumbs/${allRecipesWithCategoryName[0]?.thumbnail}`}
                width={500}
                height={200}
                alt="Mighty Super Cheesecake"
                className="w-full h-[450px] object-cover rounded-lg"
              />
            </div>
          </Link>
          <div>
            <h1 className="text-4xl font-bold mb-4">
              {allRecipesWithCategoryName[0]?.title}
            </h1>
            <p className="text-gray-600 mb-4">
              {allRecipesWithCategoryName[0]?.description}
            </p>
            <Link
              href="/blog-details.html"
              className="bg-orange-500 text-white px-6 py-2 rounded-full inline-block hover:bg-orange-600"
            >
              View Recipe
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
