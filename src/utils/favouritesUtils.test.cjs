const { addFavourite, removeFavourite } = require("./favouritesUtils.cjs");

//adds a property to favourites
test("adds a property to favourites", () => {
  const favourites = [];
  const property = { id: "prop1", price: 250000 };

  const result = addFavourite(favourites, property);

  expect(result.length).toBe(1);
  expect(result[0].id).toBe("prop1");
});

// prevents duplicate properties in favourites
test("prevents duplicate properties in favourites", () => {
  const favourites = [{ id: "prop1", price: 250000 }];
  const duplicate = { id: "prop1", price: 250000 };

  const result = addFavourite(favourites, duplicate);

  expect(result.length).toBe(1);
});
