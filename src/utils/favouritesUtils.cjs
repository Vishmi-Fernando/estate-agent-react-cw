// for add to favourite
function addFavourite(favourites, property) {
  const exists = favourites.some(f => f.id === property.id); // check duplicates
  if (exists) {
    return favourites;
  }
  return [...favourites, property];
}

// for remove from favourite
function removeFavourite(favourites, propertyId) {
  return favourites.filter(f => f.id !== propertyId); // remove property
}

module.exports = {
  addFavourite,
  removeFavourite
};
