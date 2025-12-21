import { useState } from "react";
import propertiesData from "./data/properties.json";
import SearchForm from "./components/search/SearchForm";
import PropertyList from "./components/property/PropertyList";

function App() {
  const [properties] = useState(propertiesData.properties);
  const [results, setResults] = useState(properties);

  return (
    <div className="app">
      <h1>🏠 Estate Agent Property Search</h1>

      <SearchForm
        properties={properties}
        onSearch={setResults}
      />

      <PropertyList properties={results} />
    </div>
  );
}

export default App;
