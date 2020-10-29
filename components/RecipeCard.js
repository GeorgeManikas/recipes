import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import IngredientsList from "./IngredientsList";
import Instructions from "./Instructions";
const RecipeCard = ({ id }) => {
  const [recipe, setRecipe] = useState(null);
  const router = useRouter();
  useEffect(() => {
    const fetchRecipe = async () => {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await res.json();
      setRecipe(data);
    };
    fetchRecipe();
  }, []);

  if (!recipe) return <div> ... loading </div>;
  return (
    <>
      <div className="text-2xl text-gray-800 text-center  bg-yellow-500 opacity-50  mx-auto">
        {recipe.meals[0].strMeal}
      </div>

      <div className="container mx-auto relative hover:shadow-md ">
        <div className="flex flex-col  justify-center items-center  mt-12 shadow-md rounded-lg overflow-hidden">
          <img
            src={recipe.meals[0].strMealThumb}
            alt={"not found"}
            className=" w-full h-40 object-cover  cursor-pointer  hover:rounded-sm "
          />
          <div className="text-xl font-bold ml-4 mb-12 text-gray-600 mx-10 tracking-wide w-full ml-4">
            <h4 className="ml-6 align-end">{recipe.meals[0].strMeal}</h4>
          </div>

          <div className="grid grid-cols-3 gap-1 justify-center items-center">
            {/*  Ingredients List  */}
            <div className="col-span-3 md:col-span-2 ">
              <IngredientsList recipe={recipe} />
            </div>
            <div className="col-span-3 md:col-span-1 ">
              {" "}
              <img
                src={recipe.meals[0].strMealThumb}
                alt={recipe.meals[0].strMeal}
                className=" p-2 object-cover mr-4 w-full h-auto shadow-md "
              />
            </div>
            {/* Intstructions */}
            <div className=" col-span-2  ">
              <Instructions instructions={recipe.meals[0].strInstructions} />
            </div>
          </div>

          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row justify-between items-center">
              <div
                onClick={() => router.back()}
                className="cursor-pointer px-4 py-2 m-4  border border-yellow-500 rounded-md text-yellow-500 hover:bg-yellow-500 hover:text-white"
              >
                Back{" "}
              </div>
            </div>
            <a
              href={recipe.meals[0].strYoutube}
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-4 py-2 m-4  border border-yellow-500 rounded-md text-yellow-500 hover:bg-yellow-500 hover:text-white">
                Instructions video
              </button>
            </a>
            <a
              href="/"
              className="px-4 py-2 m-4  border border-yellow-500 rounded-md text-yellow-500 hover:bg-yellow-500 hover:text-white"
            >
              {" "}
              Home page{" "}
            </a>
          </div>
          <div className="w-full flex flex-row justify-between items-center">
            <div className="absolute top-0 text-gray-700 bg-yellow-400 rounded-full px-4 py-1 m-4">
              {recipe.meals[0].strCategory}
            </div>

            <div className="absolute top-0 right-0 text-gray-700 bg-yellow-400 rounded-full px-4 py-1 m-4 ">
              {recipe.meals[0].strArea}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
