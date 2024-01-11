import React from "react";
import Blogs from "../Blogs/Blogs";
import "../../App.css"

const BlogPage = () => {
  return (
    <React.Fragment>
        <div className="blog-page">
        <Blogs/>
        </div>
    </React.Fragment>
    
  )
}

export default BlogPage;