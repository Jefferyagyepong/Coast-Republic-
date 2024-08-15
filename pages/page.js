
import { getProducts } from "./api/products/index";
export const getServerSideProps = async ({ query }) => {
3  const page = query.page || 1;
4  const res = await fetch(`https://coast-republic.vercel.app/data?page=${page}`);
5  const data = await res.json();
6
7  return {
8    props: {
9      data,
10      totalPages: data.totalPages,
11      currentPage: page,
12    },
13  };
14};
15
16const Page = ({ data, totalPages, currentPage }) => {
17  return (
18    <div>
19      <Pagination totalPages={totalPages} currentPage={currentPage} />
20      <ul>
21        {data.items.map(item => (
22          <li key={item.id}>{item.name}</li>
23        ))}
24      </ul>
25    </div>
26  );
27};
28
export default Page;
​

