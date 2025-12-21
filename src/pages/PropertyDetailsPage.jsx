import { useParams, useNavigate } from "react-router-dom";
import propertiesData from "../data/properties.json";

function PropertyDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const property = propertiesData.properties.find(
    (p) => p.id === id
  );

  if (!property) {
    return <p>Property not found</p>;
  }

  return (
    <div className="property-details">
      <button onClick={() => navigate("/")}>← Back</button>

      <h2>£{property.price.toLocaleString()}</h2>
      <p>{property.type} • {property.bedrooms} bedrooms</p>
      <p>{property.location}</p>

      <img
        src={`/images/${property.id}/img1.jpg`}
        alt={property.type}
        style={{ width: "100%", marginTop: "15px" }}
      />
    </div>
  );
}

export default PropertyDetailsPage;
