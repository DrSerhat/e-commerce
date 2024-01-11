import React from "react";
import Blogs from "../Blogs/Blogs";
import Brands from "../Brands/Brands";
import CampaignSingle from "../CampaignSingle/CampaignSingle";
import Campaigns from "../Campaigns/Campaigns";
import Categories from "../Categories/Categories";
import Footer from "../Layout/Footer/Footer";
import Header from "../Layout/Header/Header";
import Products from "../Products/Products";
import Sliders from "../Slider/Sliders";

const HomePage = () => {
  return (
    <React.Fragment>
      <Sliders/>
      <Categories/>
      <Products/>
      <Campaigns/>
      <Products/>
      <Blogs/>
      <Brands/>
      <CampaignSingle />
    </React.Fragment>
  )
}

export default HomePage;