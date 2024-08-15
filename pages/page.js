
import { getProducts } from "./api/products/index";
export const getServerSideProps = async ({ query }) => {
  const page = query.page || 1;
  const res = await fetch(`https://coast-republic.vercel.app/api/products/data?page=${page}`);
  const data = await res.json();

  return {
    props: {
      products,
      totalPages: products.totalPages,
      currentPage: page,
    },
  };
};

const Page = ({ products, totalPages, currentPage }) => {
  return (
    <div>
      <Pagination totalPages={totalPages} currentPage={currentPage} />
       <div className={styles.cards}>
            {products.map(product => (
              <CategoryCard key={product.id} product={product} />
            ))}
          </div>

  </div>
  );
};

export default Page;
​

