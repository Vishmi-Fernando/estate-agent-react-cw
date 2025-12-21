import { useState } from "react";
import propertiesData from "../data/properties.json";
import SearchForm from "../components/search/SearchForm";
import PropertyList from "../components/property/PropertyList";

function SearchPage() {
  const [properties] = useState(propertiesData.properties);
  const [results, setResults] = useState(properties);

  return (
    <>
      <SearchForm
        properties={properties}
        onSearch={setResults}
      />

      <p>Results found: {results.length}</p>

      <PropertyList properties={results} />
    </>
  );
}

export default SearchPage;
