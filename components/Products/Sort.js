export default function Sort() {
  return (
    <div className="collection-sort-box">
      <div className="collection-sort">
        <label>Filter by:</label>
        <select>
          <option value={"/"}>All T-shirts</option>
          <option value={"/"}>All Sneakers</option>
          <option value={"/"}>All Jackets</option>
          <option value={"/"}>All Watches</option>
          <option value={"/"}>All Pants</option>
        </select>
      </div>
      <div className="collection-sort">
        <label>Sort by:</label>
        <select>
          <option value={"/"}>Low-High</option>
          <option value={"/"}>High-Low</option>
        </select>
      </div>
    </div>
  );
}
