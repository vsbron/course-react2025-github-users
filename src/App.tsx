import { useState } from "react";
import SearchForm from "./components/form/SearchForm";
import UserProfile from "./components/user/UserProfile";

function App() {
  // Create state value for user name
  const [userName, setUserName] = useState<string>("vsbron");

  // Returned JSX
  return (
    <main className="mx-auto max-w-6xl px-8 py-20">
      <SearchForm userName={userName} setUserName={setUserName} />
      <UserProfile userName={userName} />
    </main>
  );
}

export default App;
