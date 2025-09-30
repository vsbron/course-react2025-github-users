import { useQuery } from "@apollo/client/react";

import UserCard from "./UserCard";
import StatsContainer from "./StatsContainer";
import ForkedRepos from "../charts/ForkedRepos";
import PopularRepos from "../charts/PopularRepos";
import { GET_USER } from "@/queries";
import { type UserData } from "@/types";
import UsedLanguages from "../charts/UsedLanguages";

// Props type
type UserProfileProps = {
  userName: string;
};

// The component
function UserProfile({ userName }: UserProfileProps) {
  // Get the data from Apollo's useQuery
  const { data, loading, error } = useQuery<UserData>(GET_USER, {
    variables: { login: userName },
  });

  // Guard clauses
  if (loading) return <div>Loading...</div>;
  if (error) return <h2 className="text-xl">{error.message}</h2>;
  if (!data) return <h2 className="text-xl">User Not Found</h2>;

  // Destructuring the data
  const {
    avatarUrl,
    name,
    bio,
    url,
    repositories,
    followers,
    following,
    gists,
  } = data.user;

  // Returned JSX
  return (
    <div>
      <UserCard avatarUrl={avatarUrl} name={name} bio={bio} url={url} />
      <StatsContainer
        totalRepos={repositories.totalCount}
        followers={followers.totalCount}
        following={following.totalCount}
        gists={gists.totalCount}
      />
      {repositories.totalCount > 0 && (
        <div className="grid md:grid-col-2 gap-6">
          <PopularRepos repositories={repositories.nodes} />
          <ForkedRepos repositories={repositories.nodes} />
          <UsedLanguages repositories={repositories.nodes} />
        </div>
      )}
    </div>
  );
}

export default UserProfile;
