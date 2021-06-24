import ProductCard from "../components/ProductCard";

export default function ProductPage({ productList }) {
  return (
    <main>
      <section className="products-container main-wrapper">
        <ul className="products-container__list">
          {productList.map((product) => (
            <ProductCard
              key={`${product.id} - ${product.title}`}
              product={product}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}
