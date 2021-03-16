const Blog = require("../models/Blog");
const path = require("path");

// Create blog
exports.createBlog = async (req, res) => {
  try {
    const { title, category, description } = req.body;

    if (req.files == null) return res.status(400).json({ msg: "No file uploaded" });

    const file = req.files.file;

    file.mv(path.join(__dirname, `../client/public/uploads/${file.name}`), async err => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }

      const newBlog = await Blog.create({
        title,
        category,
        description,
        thumbnail: { fileName: file.name, filePath: `/uploads/${file.name}` },
      });

      res.status(201).json(newBlog);
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Get all blogs
exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json({ results: blogs.length, blogs });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Get blog
exports.getBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) return res.status(404).json({ msg: "Blog not found!" });

    res.json(blog);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
