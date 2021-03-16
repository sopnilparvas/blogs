import { useState, useEffect } from "react";
import axios from "axios";

function BlogAPI() {
  const [blogs, setBlogs] = useState([]);

  const getPosts = async () => {
    const { data } = await axios.get("/api/blogs");
    setBlogs(data.blogs);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return {
    blogs: [blogs, setBlogs],
  };
}

export default BlogAPI;
