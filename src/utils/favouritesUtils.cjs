// for add to favourite
function addFavourite(favourites, property) {
  const exists = favourites.some(f => f.id === property.id);
  if (exists) {
    return favourites;
  }
  return [...favourites, property];
}

// for remove from favourite
function removeFavourite(favourites, propertyId) {
  return favourites.filter(f => f.id !== propertyId);
}

module.exports = {
  addFavourite,
  removeFavourite
};
