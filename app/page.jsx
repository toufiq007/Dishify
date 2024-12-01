import Banner from "./components/Banner";
import HandPicked from "./components/HandPicked";
import LatestRecipes from "./components/LatestRecipes";
import PopularCategories from "./components/PopularCategories";
import Subscribe from "./components/Subscribe";
import SuperDelicious from "./components/SuperDelicious";

export default function Home() {
  return (
    <>
      <main className="container mx-auto px-4 mt-[100px]">
        <Banner />
        <SuperDelicious />
        <PopularCategories />
        <Subscribe />
        <HandPicked />
        <LatestRecipes />
      </main>
    </>
  );
}
