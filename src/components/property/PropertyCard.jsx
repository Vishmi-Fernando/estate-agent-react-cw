function PropertyCard({ property }) {
  return (
    <div className="property-card">
      <img
        src={`/images/${property.id}/img1.jpg`}
        alt={property.type}
      />

      <div className="property-info">
        <h3>£{property.price.toLocaleString()}</h3>
        <p>{property.type} • {property.bedrooms} bedrooms</p>
        <p>{property.location}</p>
      </div>
    </div>
  );
}

export default PropertyCard;
