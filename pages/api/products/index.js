import data from './data.json';

export function getProducts() {
  return data;
}

export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const products = getProducts();
    res.status(200).json(products);
  }
}
export default function handler(req, res) {
  const { page = 1, limit = 10 } = req.query;  // Default page is 1, limit is 10
  const totalProducts = 100;  // Let's assume there are 100 products in total

  // Simulate product data (replace with real DB query or external API)
  const products = Array.from({ length: totalProducts }, (_, i) => ({
    id: i + 1,
    name: `Product #${i + 1}`,
    description: `This is a description for product #${i + 1}`,
    price: (Math.random() * 100).toFixed(2),
    image: `https://via.placeholder.com/150?text=Product+${i + 1}`,
  }));

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  // Paginate the products
  const paginatedProducts = products.slice(startIndex, endIndex);

  // Calculate total pages
  const totalPages = Math.ceil(totalProducts / limit);

  res.status(200).json({
    data: paginatedProducts,
    total: totalProducts,
    totalPages: totalPages,
    currentPage: Number(page),
  });
}