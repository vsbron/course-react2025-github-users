// Props type
type UserProfileProps = {
  userName: string;
};

// The component
function UserProfile({ userName }: UserProfileProps) {
  // Returned JSX
  return <h1 className="text-2xl font-bold">{userName}</h1>;
}

export default UserProfile;
