import { useState } from "react";
import PropertyTypeSelect from "./PropertyTypeSelect";

function SearchForm() {
  const [type, setType] = useState("Any");

  const handleSubmit = (e) => {
    e.preventDefault();
    // search logic will be added later
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <h2>Search Properties</h2>

      <PropertyTypeSelect value={type} onChange={setType} />

      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
