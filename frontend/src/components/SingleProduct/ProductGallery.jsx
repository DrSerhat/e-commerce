import { useState } from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import "./ProductGallery.css";
import productsData from "../../data.json";

function NextBtn({ onClick }) {
  return (
    <div className="glide__arrows">
      <button className="glide__arrow glide__arrow--right" onClick={onClick}>
        <i className="bi bi-chevron-right"></i>
      </button>
    </div>
  );
}
NextBtn.propTypes = { onClick: PropTypes.func };

function PrevBtn({ onClick }) {
  return (
    <div className="glide__arrows">
      <button className="glide__arrow glide__arrow--left" onClick={onClick}>
        <i className="bi bi-chevron-left"></i>
      </button>
    </div>
  );
}
PrevBtn.propTypes = { onClick: PropTypes.func };


const ProductGallery = () => {
  const [activeImage,setActiveImage]=useState(productsData[2].img.singleImage);
  const sliderSettings = {
    dots: false ,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    autoplay:true,
    autoplaySpeed: 3000,  
  };
  return (
    <div className="product-gallery">
      <div className="single-image-wrapper">
        <img src={activeImage} id="single-image" alt="" />
      </div>
      <div className="product-thumb">
        <div className="glide__track" data-glide-el="track">
          {/* <ol className="gallery-thumbs glide__slides"> */}
            <Slider className="gallery-thumbs glide__slides" {...sliderSettings}>
              {productsData[2].img.thumbs.map((thumbSrc,index)=>{
                return(
                <li key={index} onClick={()=>setActiveImage(thumbSrc)}
                className={`glide__slide ${activeImage===thumbSrc &&" glide__slide--active"}`}
                style={{ width: 116.333, marginLeft:5, marginRight: 5 }}
              >
                <img
                  src={thumbSrc} 
                  alt=""
                  className={`img-fluid ${activeImage===thumbSrc &&"active"}`}
                />
              </li>)
              })}
            </Slider>
          {/* </ol> */}
        </div>
        {/* <div className="glide__arrows" data-glide-el="controls">
          <button
            className="glide__arrow glide__arrow--left"
            data-glide-dir="<"
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <button
            className="glide__arrow glide__arrow--right"
            data-glide-dir=">"
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ProductGallery;