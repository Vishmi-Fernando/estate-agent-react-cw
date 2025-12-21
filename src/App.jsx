import { useState } from "react";
import propertiesData from "./data/properties.json";
import SearchForm from "./components/search/SearchForm";
import PropertyList from "./components/property/PropertyList";

function App() {
  const [properties] = useState(propertiesData.properties);
  const [results, setResults] = useState(properties);

  return (
    <>
      <div className="app-header">
        <h1>🏠 Estate Agent Property Search</h1>
        <p>Find your perfect home</p>
      </div>

      <div className="app">
        <SearchForm
          properties={properties}
          onSearch={setResults}
        />

        <p>Results found: {results.length}</p>

        <PropertyList properties={results} />
      </div>
    </>
  );
}

export default App;
