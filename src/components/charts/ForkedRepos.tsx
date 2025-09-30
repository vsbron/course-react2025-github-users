import { type Repository } from "@/types";
import { calculateMostForkedRepos } from "@/utils";

function ForkedRepos({ repositories }: { repositories: Repository[] }) {
  // Get the calculated data
  const mostForkedRepos = calculateMostForkedRepos(repositories);

  // Returned JSX
  return <div>ForkedRepos</div>;
}

export default ForkedRepos;
