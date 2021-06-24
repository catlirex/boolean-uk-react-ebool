import { useParams, useHistory } from "react-router-dom";

export default function ProductDetailPage({
  productList,
  setBasketList,
  basketList,
}) {
  const { id } = useParams();
  let history = useHistory();
  let matchProduct = productList.find((product) => product.id === Number(id));
  if (!matchProduct) {
    history.push("/404notfound");
    return null;
  }

  function handleClick() {
    if (basketList.some((item) => item.id === Number(id)))
      setBasketList(
        basketList.map((item) =>
          item.id === Number(id)
            ? {
                id: item.id,
                quantity: item.quantity + 1,
                subTotal: matchProduct.price * (item.quantity + 1),
              }
            : item
        )
      );
    else
      setBasketList([
        ...basketList,
        { id: matchProduct.id, quantity: 1, subTotal: matchProduct.price },
      ]);
    history.push("/basket");
  }
  return (
    <main>
      <section className="product-detail main-wrapper">
        <img src={matchProduct.image} alt={matchProduct.title} />
        <div
          className="product-detail__side"
          style={{ ["--random-colour"]: "var(--yellow)" }}
        >
          <h2>{matchProduct.title}</h2>
          <p>{matchProduct.description}</p>
          <p>{`£${matchProduct.price}`}</p>
          {/* <!-- Once you click in this button, the user should be redirected to the Basket page --> */}
          <button onClick={handleClick}>Add to basket</button>
        </div>
      </section>
    </main>
  );
}
