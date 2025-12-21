import { useState } from "react";
import PropertyTypeSelect from "./PropertyTypeSelect";
import PriceRangeInput from "./PriceRangeInput";

function SearchForm() {
  const [type, setType] = useState("Any");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // search logic will be added later
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <h2>Search Properties</h2>

      <PropertyTypeSelect value={type} onChange={setType} />

      <PriceRangeInput
        minPrice={minPrice}
        maxPrice={maxPrice}
        onMinChange={setMinPrice}
        onMaxChange={setMaxPrice}
      />

      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
