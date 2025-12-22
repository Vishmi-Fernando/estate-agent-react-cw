// supports drag and drop and remove zone and click x to remove

function FavouritesList({ favourites, onAdd, onRemove }) {
  const handleDragOver = (e) => { // runs when an item is dragged over this component
    e.preventDefault(); // allow drop
  };

  const handleDrop = (e) => { // runs when something is dropped onto favourites area
    const data = e.dataTransfer.getData("property"); // retrieves dragged data
    if (data) { // checks thta something was actually dropped
      const property = JSON.parse(data); // convert json string into js object
      onAdd(property); // calls parent function to add property to favourites
    }
  };

  // main container
  return (
    <div 
    // creates the favourites container 
    // enables drag and drop by attaching
      className="favourites"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <h3>Favourites</h3>
      <p style={{ fontSize: "0.8rem", opacity: 0.7 }}>
        Drag properties here
      </p>


      {/* conditional rendering: if favourite array is empty, show message */}
      {/* if not, message is hidden */}
      {favourites.length === 0 && <p>No favourites yet</p>}



      {/* Display Favourite Items */}

      {/* loops through favourites arrya and renders one block per property */}
      {favourites.map((property) => (
        <div
            key={property.id} // help react track list items
            className="favourite-item"
            draggable // allows dragging this item
            // runs when drag starts and stores property ID under removedId
            // used later for removal
            onDragStart={(e) =>
            e.dataTransfer.setData("removeId", property.id)
            }
        >
            {/* Property Thumbnail */}
            <img
            src={`/images/${property.id}/img1.jpg`} // loads property image dynamically
            alt="Property thumbnail"
            className="favourite-thumb"
            />

            {/* display property address */}
            <span>{property.location}</span>

            {/* remove button */}
            <button onClick={() => onRemove(property.id)}><b>X</b></button>
        </div>
    ))}


    {/* remove zone */}
    <div
    // drop area for removal
        className="remove-zone"
        onDragOver={(e) => e.preventDefault()} // allows dropping items
        onDrop={(e) => { // runs when item is dropped here
            const id = e.dataTransfer.getData("removeId"); // gets property ID that was dragged
            if (id) onRemove(id); // removes that property
        }}
        >
        Drag here to remove
    </div>

    </div>

    
  );
}

export default FavouritesList;
