import { useState } from "react";
import propertiesData from "./data/properties.json";
import SearchForm from "./components/search/SearchForm";

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

      <p>Results found: {results.length}</p>
    </div>
  );
}

export default App;
