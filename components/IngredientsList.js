import React, { useState, useEffect } from "react";
import IngredientImage from "./IngredientImage";

const IngredientsList = ({ recipe }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let ingredients = [];
    let measure = [];
    let items = [];
    const d = Object.entries(recipe.meals[0]);
    d.map((item) =>
      item[0].includes("Ingredient") && item[1] !== ""
        ? ingredients.push(item[1])
        : ""
    );
    d.map((item) =>
      item[0].includes("Measure") && (item[1] !== "" || item[1] !== null)
        ? measure.push(item[1])
        : ""
    );
    for (let i = 0; i < ingredients.length; i++) {
      items.push([ingredients[i], measure[i]]);
    }
    console.log(items);
    setData(items);
  }, []);

  if (!data) return <div> ...loading </div>;
  return (
    <>
      <div className="m-4">
        <div className="text-md font-semibold mb-4">Ingredients</div>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full lg:w-3/4   gap-2 ">
          {data.map((item) => (
            <div className="flex flex-row justify-start items-center border border-b border-gray-500 ">
              <div> {item[0]} </div>
              <div className=" mx-2"> {item[1]} </div>
              <div>
                {" "}
                <IngredientImage ingredient={item[0]} />{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default IngredientsList;
