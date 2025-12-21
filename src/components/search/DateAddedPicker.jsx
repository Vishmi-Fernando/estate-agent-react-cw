function DateAddedPicker({ value, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor="dateAdded">Date Added After</label>

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
