const { BlogPosts } = require('../models');
const { Users } = require('../models');
const { Categories } = require('../models');

const post = async (req, res) => {
  const { data } = req.user;
  const { id } = await Users.findOne({ where: { email: data } });
  const userId = id;
  const { title, content } = req.body;
  const newPost = await BlogPosts.create({ userId, title, content });
  return res.status(201).json(newPost);
};

const getAllPost = async (req, res) => {
  const result = await BlogPosts.findAll({
    attributes: { exclude: ['UserId'] },
    include: [
      { model: Users, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categories, as: 'categories', through: { attributes: [] } },
    ],
  });
  return res.status(200).json(result);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const result = await BlogPosts.findAll({
    where: { id },
    attributes: { exclude: ['UserId'] },
    include: [
      { model: Users, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categories, as: 'categories', through: { attributes: [] } },
    ],
  });
  if (!result.length) return res.status(404).json({ message: 'Post does not exist' });
  return res.status(200).json(result[0]);
};

const editPost = async (req, res) => {
  const { id } = req.params;
  const result = await BlogPosts.findOne({ where: { id } });

  const { data } = req.user;
  const userLog = await Users.findOne({ where: { email: data } });
  const userId = userLog.id;

  const { title, content } = req.body;
  if (userId === result.userId) {
    await BlogPosts.update({ title, content }, { where: { id } });
    const resultado = await BlogPosts.findAll({
      where: { id },
      attributes: { exclude: ['id', 'UserId', 'published', 'updated'] },
      include: [{ model: Categories, as: 'categories', through: { attributes: [] } }],
    });
    return res.status(200).json(resultado[0]);
  }
  return res.status(401).json({ message: 'Unauthorized user' });
};

module.exports = {
  post,
  getPostById,
  getAllPost,
  editPost,
};