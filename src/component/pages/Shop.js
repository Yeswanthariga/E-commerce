import React from "react";
import Product from "../Product/Product";

export default function Shop() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh"
      }}
    >
      <h1>Shop Your Favourite Items Dowm here .</h1>
      <Product />
    </div>
  );
}
