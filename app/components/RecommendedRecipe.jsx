import Image from "next/image";

const RecommendedRecipe = () => {
  return (
    <>
      <section className="my-12">
        <h2 className="text-3xl font-bold mb-8">You might also like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <Image
              width={300}
              height={100}
              src="/assets/thumbs/thumb-10.jpg"
              alt="Recipe 1"
              className="w-full h-60 object-cover rounded-lg mb-2"
            />
            <h3 className="font-semibold">Strawberries and Cream Cake</h3>
          </div>
          <div>
            <Image
              src="/assets/thumbs/thumb-11.jpg"
              width={300}
              height={100}
              alt="Recipe 2"
              className="w-full h-60 object-cover rounded-lg mb-2"
            />
            <h3 className="font-semibold">No-Bake Cheesecake</h3>
          </div>
          <div>
            <Image
              src="/assets/thumbs/thumb-12.jpg"
              width={300}
              height={100}
              alt="Recipe 3"
              className="w-full h-60 object-cover rounded-lg mb-2"
            />
            <h3 className="font-semibold">Peanut Butter Banana Cake</h3>
          </div>
          <div>
            <Image
              src="/assets/thumbs/thumb-13.jpg"
              width={300}
              height={100}
              alt="Recipe 4"
              className="w-full h-60 object-cover rounded-lg mb-2"
            />
            <h3 className="font-semibold">Banana Bread Cake</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecommendedRecipe;
