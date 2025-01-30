import Link from "next/link";
import { useRouter } from "next/router";

const Breadcrumbs = () => {
  const router = useRouter();
  const pathSegments = router.asPath.split("/").filter((segment) => segment);

  return (
    <nav aria-label="breadcrumb">
      <ul className="breadcrumb">
        <li>
          <Link href="/">Home</Link>
        </li>
         <li>
          <Link href="/products">Shop</Link>
        </li>
         <li>
          <Link href="/delivery">Delivery</Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = "/" + pathSegments.slice(0, index + 1).join("/");
          return (
            <li key={href}>
              <Link href={href}>
                {decodeURIComponent(segment.replace(/-/g, " "))}
              </Link>
            </li>
          );
        })}
      </ul>

      <style jsx>{`
        .breadcrumb {
          list-style: none;
          display: flex;
          gap: 8px;
        }
        .breadcrumb li::after {
          content: ">";
          margin: 0 5px;
        }
        .breadcrumb li:last-child::after {
          content: "";
        }
      `}</style>
    </nav>
  );
};

export default Breadcrumbs;
