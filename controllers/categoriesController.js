const { Categories } = require('../models');

const categorie = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });
  const creat = await Categories.create({ name });
  return res.status(201).json(creat);
};

module.exports = {
  categorie,
};