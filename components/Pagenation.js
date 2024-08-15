
import { useRouter } from 'next/router';
2
3const Pagination = ({ totalPages, currentPage }) => {
4  const router = useRouter();
5
6  const handlePageChange = (page) => {
7    router.push(`?page=${page}`, undefined, { shallow: true });
8  };
9
10  return (
11    <div className="pagination">
12      <button
13        onClick={() => handlePageChange(currentPage - 1)}
14        disabled={currentPage === 1}
15      >
16        Previous
17      </button>
18      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
19        <button
20          key={page}
21          onClick={() => handlePageChange(page)}
22          className={currentPage === page ? 'active' : ''}
23        >
24          {page}
25        </button>
26      ))}
27      <button
28        onClick={() => handlePageChange(currentPage + 1)}
29        disabled={currentPage === totalPages}
30      >
31        Next
32      </button>
33    </div>
34  );
35};
36
37export default Pagination;