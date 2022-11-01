import React from "react";
import "./Product.css";
import { useDispatch } from "react-redux";
function Product() {
  const dispatch = useDispatch();
  const [itemList, setItemList] = React.useState([]);
  React.useEffect(() => {
    fetch(
      "https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const response = [];
        for (const key in data) {
          response.push({
            id: key,
            newPrice: data[key].newPrice,
            oldPrice: data[key].oldPrice,
            productName: data[key].productName,
            productImage: data[key].productImage
          });
        }
        // console.log(response);
        setItemList(response);
      });
  }, []);

  return (
    <div className="Product-container">
      <h3 className="Product-header">Products</h3>
      <div className="Product-list">
        {itemList &&
          itemList.map((item) => (
            <div className="item-container" key={item.id}>
              <div className="image">
                <img src={item.productImage} alt="" />
              </div>

              <div className="item-info">
                <p className="item-title">{item.productName}</p>

                <div className="item-footer">
                  <div className="icons">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 rating"
                    >
                      <path
                        className="rating"
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 rating"
                    >
                      <path
                        className="rating"
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 rating"
                    >
                      <path
                        className="rating"
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 rating"
                    >
                      <path
                        className="rating"
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 rating"
                    >
                      <path
                        className="rating"
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="prices">
                    <div className="item-old-price">{item.oldPrice}/-</div>
                    <div className="item-price">{item.newPrice}/-</div>
                  </div>
                </div>

                <div className="item-footer-btn ">
                  <button
                    onClick={() => {
                      dispatch({ type: "UPDATE_CART_COUNT" });
                      dispatch({
                        type: "ADD_TO_CART_LIST",
                        payload: {
                          id: item.id,
                          productImage: item.productImage,
                          productName: item.productName,
                          oldPrice: item.oldPrice,
                          newPrice: item.newPrice
                        }
                      });
                    }}
                    className="item-card-btn "
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Product;
