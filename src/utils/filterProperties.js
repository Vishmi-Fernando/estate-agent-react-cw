function filterProperties(properties, filters) {
  return properties.filter((property) => {
    // 1. Type
    if (filters.type !== "Any" && property.type !== filters.type) {
      return false;
    }

    // 2. Min price
    if (filters.minPrice && property.price < Number(filters.minPrice)) {
      return false;
    }

    // 3. Max price
    if (filters.maxPrice && property.price > Number(filters.maxPrice)) {
      return false;
    }

    // 4. Min bedrooms
    if (filters.minBeds && property.bedrooms < Number(filters.minBeds)) {
      return false;
    }

    // 5. Max bedrooms
    if (filters.maxBeds && property.bedrooms > Number(filters.maxBeds)) {
      return false;
    }

    // 6. Postcode area
    if (
      filters.postcode &&
      !property.location.toUpperCase().includes(filters.postcode)
    ) {
      return false;
    }

    // 7. Date added
    if (filters.dateAdded) {
      const propertyDate = new Date(
        `${property.added.year}-${property.added.month}-01`
      );
      const filterDate = new Date(filters.dateAdded);

      if (propertyDate < filterDate) {
        return false;
      }
    }

    return true;
  });
}

export default filterProperties;
