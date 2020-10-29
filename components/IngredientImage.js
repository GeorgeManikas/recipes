import React from "react";

const IngredientImage = ({ ingredient }) => {
  return (
    <img
      src={`https://www.themealdb.com/images/ingredients/${ingredient}-Small.png`}
      alt="ingredient"
      className="w-full"
    />
  );
};

export default IngredientImage;
