import { Link } from "react-router-dom";

function PropertyCard({ property }) {
  return (
    <Link
      to={`/property/${property.id}`}
      className="property-card"
    >
      <img
        src={`/images/${property.id}/img1.jpg`}
        alt={property.type}
      />

      <div className="property-info">
        <h3>£{property.price.toLocaleString()}</h3>
        <p>{property.type} • {property.bedrooms} bedrooms</p>
        <p>{property.location}</p>
      </div>
    </Link>
  );
}

export default PropertyCard;
