import CategoriesList from "../components/CategoriesList";

export default function IndexPage({ categories }) {
  return (
    <>
      <div className="container ">
        <div className="text-2xl text-gray-800 text-center w-screen bg-yellow-500 opacity-50  mx-auto">
          Pick Food Category{" "}
        </div>
        <div className=" w-screen p-3 mx-auto my-2">
          <CategoriesList categories={categories} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  const data = await res.json();

  return { props: { categories: data.categories } };
}
