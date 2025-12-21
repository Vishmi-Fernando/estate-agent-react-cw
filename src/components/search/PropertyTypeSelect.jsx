function PropertyTypeSelect({ value, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor="propertyType">Property Type</label>

      <select
        id="propertyType"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="Any">Any</option>
        <option value="House">House</option>
        <option value="Flat">Flat</option>
      </select>
    </div>
  );
}

export default PropertyTypeSelect;
