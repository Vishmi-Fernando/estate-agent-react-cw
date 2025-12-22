// widget: Property Type search component of Search Page

function PropertyTypeSelect({ value, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor="propertyType">Property Type</label>

      {/* select property type drop down menu in search form */}
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
