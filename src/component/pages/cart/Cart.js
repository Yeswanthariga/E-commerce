import React from "react";
import { useSelector } from "react-redux";
import "./Cart.css";

export default function Cart() {
  const cartCount = useSelector((state) => state.cartCount);
  const cartList = useSelector((state) => state.cartList);
  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1>My Cart</h1>
        <h2>No of Items add to your cart are </h2>
        <span>{cartCount}</span>
      </div>

      <div className="cart-list">
        {cartList.map((item) => (
          <div className="cart-item">
            <div className="cart-item-image">
              <img src={item.productImage} alt="" />
            </div>
            <div className="cart-item-content">
              <h3 className="cart-item-name">{item.productName}</h3>
              <h3 className="cart-item-price">
                ₹{item.newPrice}
                {"    "}
                <span className="cart-item-old-price">{item.oldPrice}</span>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
