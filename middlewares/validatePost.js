const { Categories } = require('../models');

const validateTitle = (req, res, next) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ message: '"title" is required' });
  next();
};

const validateContent = (req, res, next) => {
  const { content } = req.body;
  if (!content) return res.status(400).json({ message: '"content" is required' });
    next();
};

const validateCategoryIds = async (req, res, next) => {
  const { categoryIds } = req.body;
  if (!categoryIds) return res.status(400).json({ message: '"categoryIds" is required' });
  const allCategories = [];
  await Promise.all(categoryIds.map(async (elem) => {
    const exist = await Categories.findOne({ where: { id: elem } });
    allCategories.push(exist);
    return allCategories;
  }));
  console.log(allCategories);
  if (allCategories.includes(null)) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }
  return next();
};

module.exports = {
  validateCategoryIds,
  validateContent,
  validateTitle,
};
