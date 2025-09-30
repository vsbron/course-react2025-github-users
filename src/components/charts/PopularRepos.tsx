import { type Repository } from "@/types";
import { calculateMostStarredRepos } from "@/utils";

function PopularRepos({ repositories }: { repositories: Repository[] }) {
  // Get the calculated data
  const popularRepos = calculateMostStarredRepos(repositories);

  // Returned JSX
  return <div>PopularRepos</div>;
}

export default PopularRepos;
