function FavouritesList({ favourites, onAdd, onRemove }) {
  const handleDragOver = (e) => {
    e.preventDefault(); // allow drop
  };

  const handleDrop = (e) => {
    const data = e.dataTransfer.getData("property");
    if (data) {
      const property = JSON.parse(data);
      onAdd(property);
    }
  };

  return (
    <div
      className="favourites"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <h3>❤️ Favourites</h3>
      <p style={{ fontSize: "0.8rem", opacity: 0.7 }}>
        Drag properties here
      </p>

      {favourites.length === 0 && <p>No favourites yet</p>}

      {favourites.map((property) => (
        <div
            key={property.id}
            className="favourite-item"
            draggable
            onDragStart={(e) =>
            e.dataTransfer.setData("removeId", property.id)
            }
        >
            <img
            src={`/images/${property.id}/img1.jpg`}
            alt="Property thumbnail"
            className="favourite-thumb"
            />

            <span>{property.location}</span>

            <button onClick={() => onRemove(property.id)}>✖</button>
        </div>
    ))}

    <div
        className="remove-zone"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
            const id = e.dataTransfer.getData("removeId");
            if (id) onRemove(id);
        }}
        >
        🗑 Drag here to remove
    </div>



    </div>

    
  );
}

export default FavouritesList;
