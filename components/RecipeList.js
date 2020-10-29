import React from "react";
import Link from "next/link";

const RecipeList = ({ recipes, category }) => {
  return (
    <>
      <div className="flex justify-between p-2 items-end text-2xl text-gray-800 text-center  bg-yellow-500 opacity-50  mx-auto ">
        Recipes with {category}
        <Link href="/" passHref>
          <div className="hover:bg-yellow-700 transition ease-in duration-300 cursor-pointer">
            <a className="flex items-end mr-2 text-md  ">
              <svg
                className="w-8 h-8 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Home page{" "}
            </a>
          </div>
        </Link>
      </div>

      {/*  MAIN SELECT  */}
      {/* <pre> {JSON.stringify(recipes, null, 4)} </pre> */}

      <div className="grid gap-1 mx-5 my-12  h-full grid-cols-1 md:grid-cols-3 lg:grid-cols-6 justify-center items-end ">
        {recipes.map((rec) => (
          <Link
            href="/[category]/[id]"
            as={`/${category}/${rec.idMeal}`}
            passHref
          >
            <div
              id={rec.idMeal}
              className="flex flex-row hover:shadow-md cursor-pointer"
            >
              <img
                src={rec.strMealThumb}
                alt={rec.strMeal}
                className="w-1/2 h-40 object-cover"
              />

              <p className="relative bg-yellow-500 text-gray-100 p-4 w-full ">
                {rec.strMeal}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default RecipeList;
