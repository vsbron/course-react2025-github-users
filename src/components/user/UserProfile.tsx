import { useQuery } from "@apollo/client/react";

import { GET_USER } from "@/queries";
import { type UserData } from "@/types";
import UserCard from "./UserCard";

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
    </div>
  );
}

export default UserProfile;
