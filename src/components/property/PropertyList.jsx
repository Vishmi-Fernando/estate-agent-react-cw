import PropertyCard from "./PropertyCard";

function PropertyList({ properties, onAddFavourite }) {
  if (properties.length === 0) {
    return <p>No properties found.</p>;
  }

  return (
    <div className="property-list">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
          onAddFavourite={onAddFavourite}
        />
      ))}
    </div>
  );
}

export default PropertyList;
