import { type Repository } from "@/types";
import { calculateMostForkedRepos } from "@/utils";

function ForkedRepos({ repositories }: { repositories: Repository[] }) {
  const mostForkedRepos = calculateMostForkedRepos(repositories);
  console.log(mostForkedRepos);
  // Returned JSX
  return <div>ForkedRepos</div>;
}

export default ForkedRepos;
