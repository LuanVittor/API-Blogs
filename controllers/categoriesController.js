const { Categories } = require('../models');

const categorie = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });
  const creat = await Categories.create({ name });
  return res.status(201).json(creat);
};

const getAllCategories = async (req, res) => {
  const categories = await Categories.findAll();
  return res.status(200).json(categories);
};

module.exports = {
  categorie,
  getAllCategories,
};