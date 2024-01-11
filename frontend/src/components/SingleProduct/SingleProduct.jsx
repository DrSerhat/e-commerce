// import React from 'react'
import "./SingleProduct.css";
import "./BreadCrumb.css";
import "./ProductInfo.css";
import "./ProductGallery.css";
import "../Tabs/ProductTabs.css";
import BreadCrumb from "./BreadCrumb";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductTabs from "../Tabs/ProductTabs";

const SingleProduct = () => {
  return (
    <section className="single-product">
    <div className="container">
        <div className="single-product-wrapper">
            
            <BreadCrumb/>
            
             {/* <!-- site main start -->  */}
            <div className="single-content">
                <main className="site-main">
                    <ProductGallery/>
                    <ProductInfo/>
                </main>
            </div>
            {/* <!-- site main end --> */}

            {/* <!-- tabs start --> */}
            <ProductTabs/>
            {/* <!-- tabs end --> */}

        </div>
    </div>
</section>
  )
}

export default SingleProduct