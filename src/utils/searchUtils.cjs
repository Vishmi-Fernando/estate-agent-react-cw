// for min price filter
function filterByMinPrice(properties, minPrice) {
  return properties.filter(p => p.price >= minPrice);
}

// for max price filter
function filterByMaxPrice(properties, maxPrice) {
  return properties.filter(p => p.price <= maxPrice);
}

// for min bedroom filter
function filterByBedrooms(properties, minBeds) {
  return properties.filter(p => p.bedrooms >= minBeds);
}

module.exports = {
  filterByMinPrice,
  filterByMaxPrice,
  filterByBedrooms
};
