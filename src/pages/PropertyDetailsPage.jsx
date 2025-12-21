import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import DOMPurify from "dompurify";
import propertiesData from "../data/properties.json";

function PropertyDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const property = propertiesData.properties.find(
    (p) => p.id === id
  );

  const [activeImage, setActiveImage] = useState("img1.jpg");
  const [activeTab, setActiveTab] = useState("description");

  if (!property) {
    return <p>Property not found</p>;
  }

  return (
    <div className="property-details">
      <button onClick={() => navigate("/")}>← Back to results</button>

      <h2>£{property.price.toLocaleString()}</h2>
      <p>{property.type} • {property.bedrooms} bedrooms</p>
      <p>{property.location}</p>

      {/* ===== Main Image ===== */}
      <img
        src={`/images/${property.id}/${activeImage}`}
        alt="Property"
        className="main-image"
      />

      {/* ===== Thumbnails ===== */}
      <div className="thumbnail-row">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <img
            key={num}
            src={`/images/${property.id}/img${num}.jpg`}
            alt={`Thumbnail ${num}`}
            className={`thumbnail ${
              activeImage === `img${num}.jpg` ? "active" : ""
            }`}
            onClick={() => setActiveImage(`img${num}.jpg`)}
          />
        ))}
      </div>

      {/* ===== Tabs ===== */}
      <div className="tabs">
        <button onClick={() => setActiveTab("description")}>
          Description
        </button>
        <button onClick={() => setActiveTab("floorplan")}>
          Floor Plan
        </button>
        <button onClick={() => setActiveTab("map")}>
          Map
        </button>
      </div>

      {/* ===== Tab Content ===== */}
      <div className="tab-content">
        {activeTab === "description" && (
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(property.description),
            }}
          />
        )}

        {activeTab === "floorplan" && (
          <img
            src={`/images/${property.id}/floor1.jpg`}
            alt="Floor plan"
            style={{ width: "100%" }}
          />
        )}

        {activeTab === "map" && (
          <iframe
            title="map"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              property.location
            )}&output=embed`}
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
}

export default PropertyDetailsPage;
