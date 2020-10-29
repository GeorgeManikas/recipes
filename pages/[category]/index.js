import RecipeList from "../../components/RecipeList";

const index = ({ categoryRecipes, category }) => {
  return <RecipeList recipes={categoryRecipes.meals} category={category} />;
};

export async function getStaticPaths() {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  const data = await res.json();
  const paths = data.categories.map((cat) => ({
    params: { category: cat.strCategory }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.category}`
  );
  const data = await res.json();

  return {
    props: {
      categoryRecipes: data,
      category: params.category
    }
  };
}

// 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
export default index;
