import { type Repository } from "@/types";
import { calculateMostStarredRepos } from "@/utils";

function PopularRepos({ repositories }: { repositories: Repository[] }) {
  const popularRepos = calculateMostStarredRepos(repositories);
  console.log(popularRepos);
  // Returned JSX
  return <div>PopularRepos</div>;
}

export default PopularRepos;
