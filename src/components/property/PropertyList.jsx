import PropertyCard from "./PropertyCard"; // import property cards to display in search page

function PropertyList({ properties, onAddFavourite }) {
  if (properties.length === 0) {
    return <p>No properties found.</p>;
  }

  return (
    <div className="property-list">

      {/* displays property cards */}
      {properties.map((property) => (
        <PropertyCard
          key={property.id} // react optimization
          property={property}
          onAddFavourite={onAddFavourite}
        />
      ))}
    </div>
  );
}

export default PropertyList;
