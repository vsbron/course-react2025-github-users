// Props type
type SearchFormProps = {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
};

// The component
function SearchForm({ userName, setUserName }: SearchFormProps) {
  // Returned JSX
  return <div>SearchForm</div>;
}

export default SearchForm;
