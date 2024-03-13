import React from "react";
import { LiveGovtLinks, PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      {/* <div style={{ overflow: "hidden", whiteSpace: "nowrap", position: "relative" }}>
        <div style={{ animation: "moveLeftToRight 10s linear infinite", display: "inline-block", marginRight: "20px" }}>
          <div style={{ fontFamily: "Arial, sans-serif", fontSize: "18px", fontWeight: "bold", color: "#333" }}>
            Govt Schemes:
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
          </div>
        </div>
        <div style={{ animation: "moveLeftToRight 10s linear infinite", display: "inline-block", marginRight: "20px" }}>
          <div style={{ fontFamily: "Arial, sans-serif", fontSize: "18px", fontWeight: "bold", color: "#333" }}>
            Govt Schemes:
            <a
              href="https://ahf.karnataka.gov.in/english"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginLeft: "5px",
                color: "blue",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Karnataka Livestock Agency
            </a>
          </div>
        </div>
      </div> */}
      <div className="shopTitle">
        <h1>Live Stocks</h1>
      </div>

      <div className="products">
        {PRODUCTS?.map((product) => (
          <Product data={product} />
        ))}
      </div>
      <div className="shopTitle">
        <h1>Cognizance</h1>
      </div>
      <div className="products">
        {LiveGovtLinks?.map((product) => (
          <Product data={product} />
        ))}
      </div>
      <div className="shopTitle">
        <h1>Coalition</h1>
      </div>
    </div>
  );
};
