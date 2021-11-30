import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false);

  function handleCartClick() {
    setInCart(!inCart);
  }

  const cartStatus = inCart ? 'in-cart' : '';
  const cartText = inCart ? 'Remove From Cart' : 'Add to Cart';
  const buttonColor = inCart ? 'remove' : 'add';

  return (
    <li className={cartStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonColor} onClick={handleCartClick} >{cartText}</button>
    </li>
  );
}

export default Item;
