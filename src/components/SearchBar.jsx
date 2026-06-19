function SearchBar() {
  return (
    <div className="flex justify-center -mt-8">
      <input
        className="border-4 border-yellow-400 p-4 w-96"
        placeholder="Where are you going?"
      />
      <button className="bg-blue-600 text-white px-8 border-4 border-yellow-400">
        Search
      </button>
    </div>
  );
}

export default SearchBar;