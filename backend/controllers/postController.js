exports.getPosts = (req, res) => {
  res.status(200).json({ posts: [] });
};

exports.createPost = (req, res) => {
  res.status(201).json({ message: "Post created" });
};
