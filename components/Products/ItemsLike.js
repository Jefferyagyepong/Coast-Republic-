// components/ItemsYouMayLike.js
import Link from 'next/link';
import Image from 'next/image';

const items = [
  { id: 1, name: 'Item 1', price: 'GHS 300', image: '/thugga.jpg' },
  { id: 2, name: 'Item 2', price: 'GHS 900',  image: '/products/force1c.JPG'},
  { id: 3, name: 'Item 3', price: 'GHS 750', image: '/products/force2a.JPG' },
];
// This function generates the paths for each product based on the slugs.
export async function getStaticPaths() {
  // Read the products JSON file from the public directory
  const filePath = path.join(process.cwd(), "public", "data", "products.json");
  const fileContents = fs.readFileSync(filePath, "utf8");

  // Parse the file content into a JavaScript object
  const products = JSON.parse(fileContents);

  // Generate the paths for each product by slug
  const paths = products.map(product => ({
    params: { slug: product.slug },
  }));

  return {
    paths,
    fallback: false, // If a slug is not found, it will show a 404 page
  };
}

// This function fetches product data for each slug
export async function getStaticProps({ params }) {
  const { slug } = params;

  // Read the products JSON file from the public directory
  const filePath = path.join(process.cwd(), "public", "data", "products.json");
  const fileContents = fs.readFileSync(filePath, "utf8");

  // Parse the file content into a JavaScript object
  const products = JSON.parse(fileContents);

  // Find the product by slug
  const product = products.find(product => product.slug === slug);

  // If no product is found, return a 404 page
  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: { product }, // Pass the product data to the page
  };
}
const  ItemsYouMayLike({products}) =>{
  return (
    <section className="items-you-may-like">
      <h2>Items You May Like</h2>
      <div className="items-grid">
        {items.map((item) => (
          <div key={item.id} className="item-card">
            <Image src={item.image} alt={item.name} className="item-image"  width={200} height={150}/>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            
              <Link href={`/products/${product.slug}`}>           
                 View Details               
                </Link>
        
          </div>
        ))}
      </div>
    </section>
  );
}