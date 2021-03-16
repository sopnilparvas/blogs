import React, { useContext } from "react";
import { GlobalState } from "../GlobalState";
import BlogItem from "./blogs/BlogItem";
import Modal from "../components/Modal";

function Home() {
  const state = useContext(GlobalState);

  const [blogs] = state.blogAPI.blogs;

  return (
    <>
      <h2 className='text-center'>Latest Articles</h2>
      <div className='my-3 d-flex justify-content-end'>
        <button className='btn btn-success' data-bs-toggle='modal' data-bs-target='#exampleModal'>
          Add new Blog
        </button>
      </div>

      <div className='row my-4'>
        {blogs.map(blog => (
          <div key={blog._id} className='col-md-4 my-3'>
            <BlogItem blog={blog} />
          </div>
        ))}
      </div>

      <Modal />
    </>
  );
}

export default Home;
