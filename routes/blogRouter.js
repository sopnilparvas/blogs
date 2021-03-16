const router = require("express").Router();
const { createBlog, getBlogs, getBlog } = require("../controllers/blogCtrl");

router.route("/").post(createBlog).get(getBlogs);
router.route("/:id").get(getBlog);

module.exports = router;
