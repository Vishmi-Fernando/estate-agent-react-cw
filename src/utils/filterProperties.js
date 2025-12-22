function filterProperties(properties, filters) {
  // loops through properties and filter the property variety according to the user input 
  return properties.filter((property) => {
    // 1. Type
    // if user selects 'Any' then skip, else must match selected type
    if (filters.type !== "Any" && property.type !== filters.type) {
      return false;
    }


    // 2. Min price
    // if min price exist, remove cheaper properties
    if (filters.minPrice && property.price < Number(filters.minPrice)) {
      return false;
    }


    // 3. Max price
    // Remove properties above max price
    if (filters.maxPrice && property.price > Number(filters.maxPrice)) {
      return false;
    }


    // 4. Min bedrooms
    // Remove properties with fewer bedrooms
    if (filters.minBeds && property.bedrooms < Number(filters.minBeds)) {
      return false;
    }


    // 5. Max bedrooms
    // Remove properties those bedrooms are above bedroom count
    if (filters.maxBeds && property.bedrooms > Number(filters.maxBeds)) {
      return false;
    }


    // 6. Postcode area
    // Converts location to uppercase and checks partial match
    if (
      filters.postcode &&
      !property.location.toUpperCase().includes(filters.postcode)
    ) {
      return false;
    }


    // 7. Date added
    // Converts both into Date objects
    if (filters.dateAdded) {
      const propertyDate = new Date(
        `${property.added.year}-${property.added.month}-01`
      );
      const filterDate = new Date(filters.dateAdded);

      // compares dates
      if (propertyDate < filterDate) {
        return false;
      }
    }

    return true; // property paasses all filters
  });
}

export default filterProperties;
