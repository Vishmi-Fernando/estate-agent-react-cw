import { useState } from "react"; // react hook for state
import propertiesData from "../data/properties.json"; // loads property data
// import child components 
import SearchForm from "../components/search/SearchForm";
import PropertyList from "../components/property/PropertyList";
import FavouritesList from "../components/favourites/FavouritesList";


function SearchPage() {
  const [properties] = useState(propertiesData.properties); // stores all properties
  const [results, setResults] = useState(properties); // stores filtered results
  const [favourites, setFavourites] = useState([]); // stores favorite properties

  const addFavourite = (property) => {
    if (!favourites.find((fav) => fav.id === property.id)) { // prevents duplicates
      setFavourites([...favourites, property]);
    }
  };

  const removeFavourite = (id) => {
    setFavourites(favourites.filter((fav) => fav.id !== id));
  };

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div style={{ flex: 3 }}>
        <SearchForm
          properties={properties}
          onSearch={setResults}
        />

        <p>Results found: {results.length}</p>

        <PropertyList
          properties={results}
          onAddFavourite={addFavourite}
        />
      </div>

      <div style={{ flex: 1 }}>
        <FavouritesList
          favourites={favourites}
          onAdd={addFavourite}
          onRemove={removeFavourite}
        />
      </div>
    </div>
  );
}

export default SearchPage;
