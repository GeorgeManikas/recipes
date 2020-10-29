import { useRouter } from "next/router";
import RecipeCard from "../../components/RecipeCard";
const Current = () => {
  const router = useRouter();
  const { id } = router.query;
  return <RecipeCard id={id} />;
};

export default Current;
