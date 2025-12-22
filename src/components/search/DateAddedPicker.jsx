// widget: Date selector search component of Search Page

function DateAddedPicker({ value, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor="dateAdded">Date Added After</label>

      {/* date selecting criteria in search form */}
      <input
        type="date"
        id="dateAdded"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default DateAddedPicker;
