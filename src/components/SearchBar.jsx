function SearchBar({ searchText, setSearchText }) {
  return (
    <input
      type="text"
      placeholder="Search students..."
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />
  );
}

export default SearchBar;