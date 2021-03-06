import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const { id, image, title } = product;
  return (
    <li>
      <Link to={`/products/${id}`}>
        {
          <article className="product-item">
            <img src={image} alt={title} />
            <h3>{`${title.slice(0, 20)}...`}</h3>
          </article>
        }
      </Link>
    </li>
  );
}
