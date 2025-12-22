import { Link } from "react-router-dom";

function PropertyCard({ property, onAddFavourite }) {
  const handleDragStart = (e) => {
    e.dataTransfer.setData(
      "property",
      JSON.stringify(property)
    );
  };

  return (
    <div
      className="property-card"
      draggable
      onDragStart={handleDragStart}
    >
      <Link to={`/property/${property.id}`}>
        <img
          src={`/images/${property.id}/img1.jpg`}
          alt={property.type}
        />
      </Link>

      <div className="property-info">
        <h3>£{property.price.toLocaleString()}</h3>
        <p>{property.type} • {property.bedrooms} bedrooms</p>
        <p>{property.location}</p>

        <button onClick={() => onAddFavourite(property)}>
          ❤️ Add to favourites
        </button>
      </div>
    </div>
  );
}

export default PropertyCard;
