import type { Repository } from "@/types";
import { calculatePopularLanguages } from "@/utils";

function UsedLanguages({ repositories }: { repositories: Repository[] }) {
  // Get the calculated data
  const popularLanguages = calculatePopularLanguages(repositories);

  // Returned JSX
  return <div>PopularRepos</div>;
}

export default UsedLanguages;
