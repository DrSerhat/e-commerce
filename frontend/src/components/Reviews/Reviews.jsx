// import React from 'react'

import ReviewForm from "./ReviewForm";
import ReviewItem from "./ReviewItem";
import "./Reviews.css";
import Proptypes from "prop-types";

const Reviews = ({activeTab}) => {
  return (
    
    <div className={`tab-panel-reviews ${!!activeTab&&activeTab}`}>
      <h3>2 reviews for Basic Colored Sweatpants With Elastic Hems</h3>
      <div className="comments">
        <ol className="comment-list">
        <ReviewItem/>
        <ReviewItem/>
        </ol>
      </div>
      {/* <!-- comment form start --> */}
      <ReviewForm/>
      {/* <!-- comment form end --> */}
    </div>
  );
};

export default Reviews;

Reviews.propTypes={activeTab:Proptypes.string}