function PriceRangeInput({ minPrice, maxPrice, onMinChange, onMaxChange }) {
  return (
    <div className="form-group">
      <label>Price Range</label>

      <div className="price-range">
        <input
          type="number"
          placeholder="Min price"
          value={minPrice}
          onChange={(e) => onMinChange(e.target.value)}
        />

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
