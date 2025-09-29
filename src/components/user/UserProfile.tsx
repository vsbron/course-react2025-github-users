import { useQuery } from "@apollo/client/react";

import { GET_USER } from "@/queries";
import { type UserData } from "@/types";

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
      <h1 className="text-2xl font-bold">{bio}</h1>
    </div>
  );
}

export default UserProfile;
