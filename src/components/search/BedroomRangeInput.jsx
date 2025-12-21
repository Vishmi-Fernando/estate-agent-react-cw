function BedroomRangeInput({ minBeds, maxBeds, onMinChange, onMaxChange }) {
  return (
    <div className="form-group">
      <label>Bedrooms</label>

      <div className="bedroom-range">
        <input
          type="number"
          min="0"
          placeholder="Min beds"
          value={minBeds}
          onChange={(e) => onMinChange(e.target.value)}
        />

        <input
          type="number"
          min="0"
          placeholder="Max beds"
          value={maxBeds}
          onChange={(e) => onMaxChange(e.target.value)}
        />
      </div>
    </div>
  );
}

export default BedroomRangeInput;
