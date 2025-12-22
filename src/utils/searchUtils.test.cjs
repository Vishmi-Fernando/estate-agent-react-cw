const { filterByMinPrice, filterByMaxPrice, filterByBedrooms } = require("./searchUtils.cjs");

// test filters properties by minimum price
test("filters properties by minimum price", () => {
  const properties = [
    { price: 100000 },
    { price: 300000 }
  ];

  const result = filterByMinPrice(properties, 200000);

  expect(result.length).toBe(1);
  expect(result[0].price).toBe(300000);
});

// test filters properties by maximum price
test("filters properties by maximum price", () => {
  const properties = [
    { price: 150000 },
    { price: 400000 }
  ];

  const result = filterByMaxPrice(properties, 200000);

  expect(result.length).toBe(1);
  expect(result[0].price).toBe(150000);
});

// test filters properties by minimum number of bedrooms
test("filters properties by minimum number of bedrooms", () => {
  const properties = [
    { bedrooms: 2 },
    { bedrooms: 4 }
  ];

  const result = filterByBedrooms(properties, 3);

  expect(result.length).toBe(1);
  expect(result[0].bedrooms).toBe(4);
});


