"use client"
import RecipeDetails from "../../../components/RecipeDetails";
import RecommendedRecipe from "../../../components/RecommendedRecipe";
import allRecipes from "../../../../public/data/recipes.json"

const RecipePage = ({params}) => {
  const decodeTitle = decodeURIComponent(params.id)
  const findRecipe = allRecipes.filter(recipe=> recipe.title === decodeTitle)
  
  console.log(params,'this is the items')
  return (
    <>
      <main className="container mx-auto px-4 py-8 mt-16">
        <RecipeDetails recipeDetails={findRecipe[0]} />
        <RecommendedRecipe categoryName={params.categoryName} title={decodeTitle} />
      </main>
    </>
  );
};

export default RecipePage;
