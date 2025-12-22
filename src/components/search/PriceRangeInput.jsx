// widget: Price Range search component of Search Page

function PriceRangeInput({ minPrice, maxPrice, onMinChange, onMaxChange }) {
  return (
    // Price range criteria in form
    <div className="form-group">
      <label>Price Range</label>
      <div className="price-range">
         {/* min price of price range  */}
        <input
          type="number"
          placeholder="Min price"
          value={minPrice}
          onChange={(e) => onMinChange(e.target.value)}
        />

        {/* max price of price range */}
        <input
          type="number"
          placeholder="Max price"
          value={maxPrice}
          onChange={(e) => onMaxChange(e.target.value)}
        />
      </div>
    </div>
  );
}

export default PriceRangeInput;
