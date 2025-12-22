// widget: Bedroom Range search component of Search Page

function BedroomRangeInput({ minBeds, maxBeds, onMinChange, onMaxChange }) {
  return (
    <div className="form-group">
      <label>Bedrooms</label>

      {/* // min value of bedrooms in form */}
      <div className="bedroom-range">
        <input type="number"
          min="0"
          placeholder="Min beds"
          value={minBeds}
          onChange={(e) => onMinChange(e.target.value)}
        />

        {/* max value of bedrooms in form */}
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
