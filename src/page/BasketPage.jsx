import { useEffect, useState } from "react";
import BasketItem from "../components/BasketItem";

export default function BasketPage({ setBasketList, basketList, productList }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(0);
    basketList.map((item) => setTotal((total) => total + item.subTotal));
  }, [basketList, setTotal]);

  function handleChange(e, id, price) {
    setBasketList(
      basketList.map((item) => {
        if (item.id === id)
          return {
            ...item,
            quantity: e.target.value,
            subTotal: price * e.target.value,
          };
        return item;
      })
    );
  }

  return (
    <main>
      <section className="basket-container">
        <h2>Your Basket</h2>
        <ul>
          {basketList.map((cartItem) => {
            let targetDetail = productList.find(
              (product) => cartItem.id === product.id
            );
            return (
              <BasketItem
                targetDetail={targetDetail}
                key={targetDetail.id}
                cartItem={cartItem}
                handleChange={handleChange}
              />
            );
          })}
        </ul>
        {/* <!-- Basket total is calculated using each item's total from above --> */}
        <h3>Your total: £{total.toFixed(2)}</h3>
      </section>
    </main>
  );
}
