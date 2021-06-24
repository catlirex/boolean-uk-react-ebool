export default function BasketItem({ targetDetail, cartItem, handleChange }) {
  return (
    <li>
      <article className="basket-container__item">
        <img src={targetDetail.image} alt={targetDetail.title} width="90" />
        <p>{targetDetail.title}</p>
        <p>
          Qty:
          <select
            value={cartItem.quantity}
            onChange={(e) => handleChange(e, cartItem.id, targetDetail.price)}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </p>
        <p>{`Item total: £${cartItem.subTotal}`}</p>
      </article>
    </li>
  );
}
