import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage, link } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} style={{ border: "2px solid black", width: "350px", height: "350px", objectFit: "cover" }} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        {price && (
          <>
            <p> Rs:{price}</p>
            <button className="addToCartBttn" onClick={() => addToCart(id)}>
              Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
            </button>{" "}
          </>
        )}
        {link && (
          <a
            href="https://nlm.udyamimitra.in/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginLeft: "5px",
              color: "blue",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Explore Here
          </a>
        )}
      </div>
    </div>
  );
};
