import { Link } from "react-router-dom";

export default function CategoryCard({ cat }) {
  return (
    <li>
      <Link
        to={{
          pathname: `/categories/${cat.id}`,

          href: `/categories/${cat.id}`,
        }}
        style={{ ["--random-colour"]: "var(--yellow)" }}
      >
        {cat.name}
      </Link>
    </li>
  );
}
