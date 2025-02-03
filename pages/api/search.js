// pages/api/search.js
export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { q } = req.query;
  if (!q) {
    return res.status(400).json({ message: 'Query parameter is required' });
  }

  // Dummy product data (Replace with database query)
  const products = [
    { id: 1, name: 'Apple iPhone 15' },
    { id: 2, name: 'Samsung Galaxy S23' },
    { id: 3, name: 'Google Pixel 8' },
    { id: 4, name: 'OnePlus 11' },
  ];

  // Filter products based on search query
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(q.toLowerCase())
  );

  res.status(200).json(filteredProducts);
}
