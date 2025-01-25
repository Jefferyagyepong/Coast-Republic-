import {
    React,
    axios,
  useEffect,
  useState,
  useParams,
} from "react";

import Image from "next/image";

  


function SingleProductCard () {
    const [singleProduct, setSingleProduct] = useState([]);
    const { product, } = singleProduct;
    const productId = useParams();

    function getProductById(productId) {
    
    axios.get(`/api/products/data/${productId}`).then((res) => {
        setSingleProduct(res.data.product);
      }).catch((err) => {
        console.log(" err", err);
      });
  }

  useEffect(() => {
    toast.success(" Fetching single card data.");

    getProductById(productId.id);
  }, [productId]);

  return (
    <div>
      <section>
        <div>
          <div>
            <Image
              alt="ecommerce"
  
              src={product.image && product.image}
            />

            <div>
              <h1>
                {product.title && product.title}
              </h1>

              <div>
                <span>
                  <span>4 Reviews</span>
                </span>
              </div>

              <p>{product.description && product.description}</p>

              <div>
                <div>
                  <div>
                    <span></span>
                  </div>
                </div>
              </div>

              <div>
                <span>${product.price && product.price}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SingleProductCard;
