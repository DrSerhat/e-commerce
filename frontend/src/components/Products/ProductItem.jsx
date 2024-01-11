//import { useState } from "react";
import { useContext } from "react";
import "./ProductItem.css";
import PropTypes from "prop-types";
import { cartContext } from "../../context/cartProvider";


const ProductItem = ({product}) => {
const {addToChart}=useContext(cartContext)

  return (
    
    <div
      className="product-item glide__slide glide__slide--active"
      style={{ width: 242.667, marginRight: 10 }}
    >
      <div className="product-image">
        <a href="#" draggable="true">
          <img src={product.img.thumbs[0]} alt="" className="img1" />
          <img src={product.img.thumbs[1]} alt="" className="img2" />
        </a>
      </div>
      <div className="product-info">
        <a href="$" className="product-title" draggable="true">
          {product.name}
        </a>
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
        <div className="product-prices">
          <strong className="new-price">${product.price.newPrice.toFixed(2)}</strong>
          <span className="old-price">${product.price.oldPrice.toFixed(2)}</span>
        </div>
        <span className="product-discount">-{product.discount}%</span>
        <div className="product-links">
          <button className="add-to-cart" onClick={()=>(addToChart(product))}>
            <i className="bi bi-basket-fill"></i>
          </button>
          <button>
            <i className="bi bi-heart-fill"></i>
          </button>
          <a href="#" className="product-link" draggable="true">
            <i className="bi bi-eye-fill"></i>
          </a>
          <a href="#" draggable="true">
            <i className="bi bi-share-fill"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

ProductItem.propTypes={
  product:PropTypes.object, 
  chartItems:PropTypes.func, 
  setChartItems:PropTypes.func}