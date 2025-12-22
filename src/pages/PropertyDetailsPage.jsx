import { useParams, useNavigate } from "react-router-dom"; // to component read values from the url and app move between pages using js
import { useState } from "react";
import DOMPurify from "dompurify"; // cleans data html and app is safe from hacking
import propertiesData from "../data/properties.json";

function PropertyDetailsPage() {
  const { id } = useParams(); // gets property ID from URL
  const navigate = useNavigate(); // allows back navigation

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
      <button onClick={() => navigate("/")}> Back to results</button>

      {/* display property details */}
      <h2>£{property.price.toLocaleString()}</h2> 
      <p>{property.type} | {property.bedrooms} bedrooms</p>
      <p>{property.location}</p>


      {/* Image Gallery */}
      {/*Main Image*/}
      <img
        src={`images/${property.id}/${activeImage}`}
        alt="Property"
        className="main-image"
      />

      {/*Thumbnails*/}
      <div className="thumbnail-row">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <img
            key={num}
            src={`images/${property.id}/img${num}.jpg`}
            alt={`Thumbnail ${num}`}
            // track active image
            className={`thumbnail ${
              activeImage === `img${num}.jpg` ? "active" : ""
            }`}
            onClick={() => setActiveImage(`img${num}.jpg`)} // changes image
          />
        ))}
      </div>


      {/*Tabs*/}
      <div className="tabs">
        {/* button to description tab */}
        <button onClick={() => setActiveTab("description")}>
          Description
        </button>
        {/* button to Floor plan tab */}
        <button onClick={() => setActiveTab("floorplan")}>
          Floor Plan
          {/* button to Map tab */}
        </button>
        <button onClick={() => setActiveTab("map")}>
          Map
        </button>
      </div>

      {/*Tab Content*/}
      <div className="tab-content">

        {/* display descriptionfor each property */}
        {activeTab === "description" && (
          <div
          // Prevents malicious HTML injection.
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(property.description),
            }}
          />
        )}

        {/* display floor plan image of each property */}
        {activeTab === "floorplan" && (
          <img
            src={`images/${property.id}/floor1.jpg`}
            alt="Floor plan"
            style={{ width: "100%" }}
          />
        )}

        {/* display map of the each property location */}
        {activeTab === "map" && (
            // google maps iframe
          <iframe
            title="map"
            src={`https://www.google.com/maps?q=${encodeURIComponent( // safely inserts address
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
