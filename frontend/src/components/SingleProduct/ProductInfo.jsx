//import React from "react";

import { useState } from "react";


const ProductInfo = () => {
const [activeSize,setActiveSize]=useState("XS");
const sizes=["XS","S","M","L","XL"];  
  const [activeColor,setActiveColor]=useState("blue-color");
  const colors=["blue-color","red-color","green-color","purple-color"]
  return (
    <div className="product-info">
      <h1 className="product-title">Ridley High Waist</h1>
      <div className="product-review">
        <ul className="product-star">
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-half"></i>
          </li>
        </ul>
        <span>2 reviews</span>
      </div>
      <div className="product-price">
        <s className="old-price">$165</s>
        <strong className="new-price">$100</strong>
      </div>
      <p className="product-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <form className="variations-form">
        <div className="variations">
          <div className="colors">
            <div className="colors-label">
              <span>Color</span>
            </div>
            <div className="colors-wrapper">
            {colors.map((color,index)=>
            <div key={index} className={`color-wrapper ${activeColor===color?"active":""}`} onClick={()=>setActiveColor(color)}>
            <label className={color}>
              <input type="radio" name="product-color" />
            </label>
          </div>
            )}
            </div>
          </div>
          <div className="values">
            <div className="values-label">
              <span>Size</span>
            </div>
            <div className="values-list">
              {sizes.map((size,index)=>{
              return (<span key={index} className={size===activeSize&&"active"} onClick={()=>setActiveSize(size)}>{size}</span>)
              })}
            </div>
          </div>
          <div className="cart-button">
            <input type="number" value="1" min="1" id="quantity" />
            <button
              className="btn btn-lg btn-primary"
              id="add-to-cart"
              type="button"
            >
              Add to cart
            </button>
          </div>
          <div className="product-extra-buttons">
            <a href="#">
              <i className="bi bi-globe"></i>
              <span>Size Guide</span>
            </a>
            <a href="#">
              <i className="bi bi-heart"></i>
              <span>Add to Wislist</span>
            </a>
            <a href="#">
              <i className="bi bi-share"></i>
              <span>Share this Product</span>
            </a>
          </div>
        </div>
      </form>
      <div className="divider"></div>
      <div className="product-meta">
        <div className="product-sku">
          <span>SKU:</span>
          <strong>BE45VGRT</strong>
        </div>
        <div className="product-categories">
          <span>Categories:</span>
          <strong>Pants , Women</strong>
        </div>
        <div className="product-tags">
          <span>Tags:</span>
          <a href="#">black</a>,<a href="#">white</a>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
