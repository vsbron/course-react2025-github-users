import { type FormEvent, useState } from "react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import { toast } from "sonner";

// Props type
type SearchFormProps = {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
};

// The component
function SearchForm({ userName, setUserName }: SearchFormProps) {
  // Create state value for text
  const [text, setText] = useState<string>(userName);

  // Submit search handler function
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    // Prevent default behavior
    e.preventDefault();

    // Guard clause
    if (text === "") {
      toast("Please enter a valid username");
      return;
    }

    // Set the state with the text
    setUserName(text);
  };

  // Returned JSX
  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center gap-x-2 w-full lg:w-1/3 mb-8"
    >
      <Label htmlFor="search" className="sr-only">
        Search
      </Label>
      <Input
        type="text"
        id="search"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Search GitHub users"
        className="flex-grow bg-background"
      />
      <Button type="submit">Search</Button>
    </form>
  );
}

export default SearchForm;
