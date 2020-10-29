import React, { useState } from "react";
import Link from "next/link";
const CategoriesList = ({ categories }) => {
  const handleMouseOver = (id) => {
    const p = document.getElementById(id);

    p.style.filter = "blur(2px)";
  };

  const handleMouseLeave = (id) => {
    const p = document.getElementById(id);

    p.style.filter = "none";
  };

  if (!categories) return <div> ....loading </div>;

  return (
    // <pre> {JSON.stringify(categories, null, 4)} </pre>
    <div className="container mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-1 justify-center items-center mx-auto">
        {categories.map((cat) => (
          <Link href="/category" as={`/${cat.strCategory}`} passHref>
            <div className="relative border border=gray-100 shadow hover:shadow-md cursor-pointer mx-auto">
              <img
                src={cat.strCategoryThumb}
                id={cat.idCategory}
                alt={cat.strCategoryThumb}
                onMouseEnter={() => handleMouseOver(cat.idCategory)}
                onMouseLeave={() => handleMouseLeave(cat.idCategory)}
              />
              <span className="absolute bottom-0 p-1 text-gray-800 w-full bg-yellow-500 opacity-75">
                {cat.strCategory}
              </span>
              <div>
                <button className="absolute   -my-12 mx-32  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`text-yellow-600 w-10 h-10 hover:text-white`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesList;
