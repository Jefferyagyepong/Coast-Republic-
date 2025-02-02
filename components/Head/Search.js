import { useState } from "react";

const SearchPage = ({ products }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Handle search input change
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query)
    );

    setFilteredProducts(filtered);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-2xl mx-auto bg-white p-6 shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4">Search Products</h1>
        
        <input
          type="text"
          placeholder="Search for a product..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />

        {filteredProducts.length > 0 ? (
          <ul className="space-y-2">
            {filteredProducts.map((product) => (
              <li key={product.id} className="p-3 border rounded-md shadow-sm bg-gray-50">
                <strong>{product.name}</strong> - ${product.price}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-red-500">No products found.</p>
        )}
      </div>
    </div>
  );
};

// Fetch data at build time
export async function getStaticProps() {
  const products = require("../data/products.json"); // Load local JSON file
  return {
    props: { products },
  };
}

export default SearchPage;
