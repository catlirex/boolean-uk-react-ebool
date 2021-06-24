import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function ProductPage({ productList }) {
  const { id } = useParams();
  let history = useHistory();

  const [filteredItems, setFilteredItem] = useState([]);
  useEffect(() => {
    id && productList.some((target) => target.categoryId === Number(id))
      ? setFilteredItem(
          productList.filter((product) => product.categoryId === Number(id))
        )
      : id
      ? history.push("/404notfound")
      : setFilteredItem([]);
  }, [id, productList]);

  return (
    <main>
      <section className="products-container main-wrapper">
        <ul className="products-container__list">
          {!id
            ? productList.map((product) => (
                <ProductCard
                  key={`${product.id} - ${product.title}`}
                  product={product}
                />
              ))
            : null}
          {id && filteredItems
            ? filteredItems.map((product) => (
                <ProductCard
                  key={`${product.id} - ${product.title}`}
                  product={product}
                />
              ))
            : null}
        </ul>
      </section>
    </main>
  );
}
