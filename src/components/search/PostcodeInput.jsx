function PostcodeInput({ value, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor="postcode">Postcode Area</label>

      <input
        type="text"
        id="postcode"
        placeholder="e.g. BR5"
        value={value}
        onChange={(e) => onChange(e.target.value.toUpperCase())}
      />
    </div>
  );
}

export default PostcodeInput;
