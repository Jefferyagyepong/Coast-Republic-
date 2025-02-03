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
    <div>
      <div>
        <h1>Search Products</h1>
        
        <input
          type="text"
          placeholder="Search for a product..."
          value={searchQuery}
          onChange={handleSearch}
          
        />

        {filteredProducts.length > 0 ? (
          <ul className="space-y-2">
            {filteredProducts.map((product) => (
              <li key={product.id}>
                <strong>{product.name}</strong> - ${product.price}
              </li>
            ))}
          </ul>
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

// Fetch data at build time
export async function getStaticProps() {
  const products = require('/public/data/products.json'); // Load local JSON file
  return {
    props: { products },
  };
}

export default SearchPage;
