const validadePayload = (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (categoryIds) return res.status(400).json({ message: 'Categories cannot be edited' });

  if (!title) return res.status(400).json({ message: '"title" is required' });

  if (!content) return res.status(400).json({ message: '"content" is required' });
  return next();
};

module.exports = {
  validadePayload,
};