import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false)
  const addCart = inCart? "in-cart":""

  const onClickHandler = ()=>{
    setInCart(!inCart)
  }

  return (
    <li className="">
      <span>{name}</span>
      <span className={addCart}>{category}</span>
      <button className="add" onClick={onClickHandler }>Add to Cart</button>
    </li>
  );
}

export default Item;
