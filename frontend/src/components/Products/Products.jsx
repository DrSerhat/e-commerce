import { useState } from "react";
import ProductItem from "./ProductItem";
import Slider from "react-slick";
import PropTypes from "prop-types";
import productsData from "../../data.json";
import "./Products.css";
import { useContext } from "react";
import CartProvider from "../../context/cartProvider";

function NextBtn({ onClick }) {
  return (
    <div className="glide__arrows">
      <button className="glide__arrow glide__arrow--right" onClick={onClick} style={{zIndex:"2"}}>
        <i className="bi bi-chevron-right"></i>
      </button>
    </div>
  );
}
NextBtn.propTypes = { onClick: PropTypes.func };

function PrevBtn({ onClick }) {
  return (
    <div className="glide__arrows">
      <button className="glide__arrow glide__arrow--left" onClick={onClick} style={{zIndex:"2"}}>
        <i className="bi bi-chevron-left"></i>
      </button>
    </div>
  );
}
PrevBtn.propTypes = { onClick: PropTypes.func };

const Products = () => {
  const [products] = useState(productsData);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    autoplay:true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="products">
      <div className="container">
        <div className="section-title">
          <h2>Featured Products</h2>
          <p>Summer Collection New Morden Design</p>
        </div>
        <div className="product-wrapper product-carousel">
          <div className="glide__track">
            {/* <ul className="product-list glide__slides" id="product-list"> */}
            <Slider {...sliderSettings}>
              {products.map((product) => (
                <div key={product.id}>
                  <ProductItem product={product} key={product.id} />
                </div>
              ))}
            </Slider>
            {/* </ul> */}
          </div>
          <div className="glide__arrows"></div>
        </div>
      </div>
    </section>
  );
};

export default Products;

Products.propTypes={
  product:PropTypes.object,
}