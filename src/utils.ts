import { type Repository } from "./types";

/**
 * Calculates he top 5 most forked repositories
 * @param repositories Array of repository data from GitHub API
 * @returns Array of objects containing repository names and their fork counts
 * Example return: [{ repo: "react", count: 1000}, { repo: "vue", count: 500}]
 */

export const calculateMostForkedRepos = (
  repositories: Repository[]
): { repo: string; count: number }[] => {
  // Guard clause
  if (repositories.length === 0) {
    return [];
  }

  // Sort the repos by forked number and limit to 5
  const forkedRepos = repositories
    .map((repo) => {
      return { repo: repo.name, count: repo.forkCount };
    })
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  // Return the array
  return forkedRepos;
};

/**
 * Calculates he top 5 most starred repositories
 * @param repositories Array of repository data from GitHub API
 * @returns Array of objects containing repository names and their star counts
 * Example return: [{ repo: "tensorflows", count: 5000}, { repo: "linux", count: 40100}]
 */
export const calculateMostStarredRepos = (
  repositories: Repository[]
): { repo: string; stars: number }[] => {
  // Guard clause
  if (repositories.length === 0) {
    return [];
  }

  // Sort the repos by starred number and limit to 5
  const starredRepos = repositories
    .map((repo) => {
      return { repo: repo.name, stars: repo.stargazerCount };
    })
    .sort((a, b) => b.stars - a.stars)
    .slice(0, 5);

  // Return the array
  return starredRepos;
};
