import React from "react";
import { Link } from "react-router-dom";

function BlogItem({ blog }) {
  return (
    <div className='card'>
      <img src='...' className='card-img-top' alt='...' />
      <div className='card-body'>
        <h5 className='card-title'>{blog.title}</h5>
        <p className='card-text'>{blog.description}</p>
        <Link to={`/blogs/${blog._id}`} className='btn btn-success'>
          Read More
        </Link>
      </div>
    </div>
  );
}

export default BlogItem;
