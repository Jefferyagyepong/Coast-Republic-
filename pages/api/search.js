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
  const products = 
[
  {
    "slug": " Air Force 1 07 black",
    "name": " Air Force 1 07 black",
    "description": "This is a great product.",
    "price": 19.99,
    "_id": 1,    
    "image": "/products/force1a.JPG",    
     "brand": "Nike"
    
  },
  {
    "slug": " Reebok Classics",
    "name": " Reebok Classics",
    "description": "This is a great product.",
    "_id": 2,    
    "image": "/products/reebook1c.JPG",
    "price": 90.00,
    "brand": "Reebok"
     
  },
  {
    "slug": " Air Force 1 07 high black",
    "name": " Air Force 1 07 high black",
    "description": "This is a great product.",
    "_id": 3,
    "image": "/products/force3a.JPG",
    "price": 130.00,    
    "brand": "Nike"
    
  },
  {
    "slug": " Adidas Campus",
    "name": " Adidas Campus",
    "description": "This is a great product.",
    "_id": 4,
    "image": "/products/campus1a.JPG",
    "price": 85.00,    
    "brand": "Adidas"
    
  },
  {
    "slug": " Converse Chuck Taylor",
    "name": " Converse Chuck Taylor",
    "description": "This is a great product.",
    "_id": 5,      
    "image": "/products/chuck1a.JPG",
    "price": 75.00,    
    "brand": "Converse"
    
  },
  {
    "slug": " Timberland boots",
    "name": " Timberland boots",
    "description": "This is a great product.",
    "_id": 6,    
    "image": "/products/tims1a.JPG",
    "price": 170.00,
    "brand": "Timberland"
  
  },
  {
    "slug": "vans",
    "name": " vans",
    "description": "This is a great product.",
    "_id": 7,
    "image": "/products/vans1a.WEBP",
    "price": 80.00,  
    "brand": "Vans"
   
  },
  {
    "slug": " Reebok",
    "name": " Reebok",
    "description": "This is a great product.",
    "_id": 8,
    "image": "/products/reebook1b.WEBP",
    "price": 120.00,    
    "brand": "Reebok"
  
  }
];

  // Filter products based on search query
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(q.toLowerCase())
  );

  res.status(200).json(filteredProducts);
}
