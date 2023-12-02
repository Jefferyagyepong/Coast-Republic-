import Link from "next/link";
const Products = ({ data }) => {
    const products = data;
    return (
        <>
            {products.map(({ id, name, seo:  { description }}) =>(
            <div key={id} className="product">
                <h2>{name}</h2>
                <p>{description}</p>
                <Link href={`/products/${permalink}`}>
                    <a>View</a>
                </Link>
                
            </div>
            ))}
        </>
    );
};
export async function getServerSideProps() {
    const headers = {
        "X-Autorization": process.env.CHEC_AI_KEY,
        Accept: "application/json",
        "Content-Type": "application/json",

    };
    const res = await fetch("/pages/api/[name].js", {
      method: "GET",
      headers: headers,
    });
    const data = await res.json();
    if (!data) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };

    }
    return {
        props: data,
    };
}
export default Products;