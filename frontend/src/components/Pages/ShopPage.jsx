import React from "react";
import Header from "../Layout/Header/Header";
import Categories from "../Categories/Categories";
import Products from "../Products/Products";
import CampaignSingle from "../CampaignSingle/CampaignSingle";

const ShopPage = () => {
  return (
    <React.Fragment>
      <Categories/>
      <Products/>
      <CampaignSingle/>
      <Products/>
    </React.Fragment>
  )
}

export default ShopPage;