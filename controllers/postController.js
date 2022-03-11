const { BlogPosts } = require('../models');
const { Users } = require('../models');

const post = async (req, res) => {
  const { data } = req.user;
  const { id } = await Users.findOne({ where: { email: data } });
  const userId = id;
  const { title, content } = req.body;
  const newPost = await BlogPosts.create({ userId, title, content });
  return res.status(201).json(newPost);
};

module.exports = {
  post,
};