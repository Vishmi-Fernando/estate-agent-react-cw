import { Link } from "react-router-dom"; // to loads the new components and pages 

function PropertyCard({ property, onAddFavourite }) {
  const handleDragStart = (e) => {
    // sends sproperty data when dragging
    e.dataTransfer.setData(
      "property",
      JSON.stringify(property)
    );
  };

  return (
    <div
      className="property-card"
      draggable // enables drag and drop
      onDragStart={handleDragStart}
    >
      {/* display details property page when clicking */}
      <Link to={`/property/${property.id}`}> 
        <img
          src={`/images/${property.id}/img1.jpg`}
          alt={property.type}
        />
      </Link>

      {/* display property details */}
      <div className="property-info">
        {/* display property price */}
        <h3>£{property.price.toLocaleString()}</h3> 
        {/* display property type */}
        <p>{property.type} | {property.bedrooms} bedrooms</p>
        {/* display property location */}
        <p>{property.location}</p>

        {/* add to favorite the property by clicking the button */}
        <button onClick={() => onAddFavourite(property)}>
          Add to favourites
        </button>
      </div>
    </div>
  );
}

export default PropertyCard;
