import StatsCard from "./StatsCard";

// Props type
type StatsContainerProps = {
  totalRepos: number;
  followers: number;
  following: number;
  gists: number;
};

// The component
function StatsContainer(props: StatsContainerProps) {
  // Destructure props
  const { totalRepos, followers, following, gists } = props;

  // Returned JSX
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 mb-8">
      <StatsCard title="Total Repositories" count={totalRepos} />
      <StatsCard title="Followers" count={followers} />
      <StatsCard title="Following" count={following} />
      <StatsCard title="Gists" count={gists} />
    </div>
  );
}

export default StatsContainer;
