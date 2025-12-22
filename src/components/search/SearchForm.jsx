import { useState } from "react";
import filterProperties from "../../utils/filterProperties";
import PropertyTypeSelect from "./PropertyTypeSelect";
import PriceRangeInput from "./PriceRangeInput";
import BedroomRangeInput from "./BedroomRangeInput";
import PostcodeInput from "./PostcodeInput";
import DateAddedPicker from "./DateAddedPicker";


function SearchForm({ properties, onSearch }) {
  // each filter has its own state
  const [type, setType] = useState("Any");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minBeds, setMinBeds] = useState("");
  const [maxBeds, setMaxBeds] = useState("");
  const [postcode, setPostcode] = useState("");
  const [dateAdded, setDateAdded] = useState("");

  const handleSubmit = (e) => {
  e.preventDefault(); // stop page refresh

  // combines filters
  const filters = {
    type,
    minPrice,
    maxPrice,
    minBeds,
    maxBeds,
    postcode,
    dateAdded,
  };

  // filters properties
  const results = filterProperties(properties, filters);
  onSearch(results); // sends results back to parent
};


// return and setting search form 
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

      <BedroomRangeInput
        minBeds={minBeds}
        maxBeds={maxBeds}
        onMinChange={setMinBeds}
        onMaxChange={setMaxBeds}
      />

      <PostcodeInput value={postcode} onChange={setPostcode} />

      <DateAddedPicker value={dateAdded} onChange={setDateAdded} />

      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
