// widget: Postcode search component of Search Page

// controlled input of postcode search criteria
function PostcodeInput({ value, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor="postcode">Postcode Area</label>
      
      <input // tag for search form postcode area
        type="text"
        id="postcode"
        placeholder="e.g. BR5"
        value={value}
        onChange={(e) => onChange(e.target.value.toUpperCase())} // converts input to uppercase
      />
    </div>
  );
}

export default PostcodeInput;
