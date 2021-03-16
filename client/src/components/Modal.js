import React, { useState, useContext } from "react";
import axios from "axios";
import { GlobalState } from "../GlobalState";

function Modal() {
  const state = useContext(GlobalState);
  const [blogs, setBlogs] = state.blogAPI.blogs;

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState({});

  const handleSubmit = async e => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", title);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("file", file);

    await axios.post("/api/blogs", formData);

    setBlogs(prevBlogs => [...prevBlogs, { title, category, description, file }]);
  };

  return (
    <div className='modal fade' id='exampleModal' tabIndex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>
              Add new Blog
            </h5>
            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
          </div>
          <div className='modal-body'>
            <form onSubmit={handleSubmit} encType='multipart/form-data'>
              <div className='mb-3'>
                <label htmlFor='title' className='form-label'>
                  Title
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='title'
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='category' className='form-label'>
                  Category
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='category'
                  value={category}
                  onChange={e => setCategory(e.target.value)}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='desc' className='form-label'>
                  Description
                </label>
                <textarea
                  className='form-control'
                  id='desc'
                  rows='3'
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className='mb-3'>
                <label htmlFor='formFile' className='form-label'>
                  Featured Image
                </label>
                <input className='form-control' type='file' id='formFile' onChange={e => setFile(e.target.files[0])} />
              </div>
              <button type='submit' className='btn btn-success w-100'>
                Publish
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
