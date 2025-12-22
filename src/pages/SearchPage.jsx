import { useState } from "react";
import propertiesData from "../data/properties.json";
import SearchForm from "../components/search/SearchForm";
import PropertyList from "../components/property/PropertyList";
import FavouritesList from "../components/favourites/FavouritesList";

function SearchPage() {
  const [properties] = useState(propertiesData.properties);
  const [results, setResults] = useState(properties);
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (property) => {
    if (!favourites.find((fav) => fav.id === property.id)) {
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
