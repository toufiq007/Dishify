import Image from "next/image";
import allRecipies from "../../public/data/recipes.json";
import Ratting from "./Ratting";

const SuperDelicious = () => {
  const maxRattingRecipes = allRecipies.filter(
    (recipes) => recipes?.rating?.average_rating >= 4.7
  );
  console.log(maxRattingRecipes);
  return (
    <>
      <section className="mb-16" id="super_delicious">
        <h2 className="text-3xl font-bold mb-8">Super Delicious</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {maxRattingRecipes?.length > 0 &&
            maxRattingRecipes?.slice(0, 3).map((recipe, index) => (
              <div key={index}>
                <Image
                  width={300}
                  height={100}
                  src={`/assets/thumbs/${recipe?.thumbnail}`}
                  alt="Chicken Meatball with Creamy Cheese"
                  className="w-full h-[300px] object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{recipe?.title}</h3>
                <div className="flex items-center text-yellow-500 mb-2">
                  <Ratting value={recipe?.rating?.average_rating} />
                </div>
                <p className="text-gray-600">{recipe?.cooking_time}</p>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default SuperDelicious;
