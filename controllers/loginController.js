const jwt = require('jsonwebtoken');
const { Users } = require('../models');

const { JWT_SECRET } = process.env;

const login = async (req, res) => {
  try {
    const { email } = req.body;
    const emails = await Users.findAll({ where: { email } });
    if (!emails.length) {
      return res.status(400).json({ message: 'Invalid fields' });
    }
    const token = jwt.sign({ data: email }, JWT_SECRET, {
      expiresIn: '10h',
    });
    return res.status(200).json({ token });
  } catch (e) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  login,
};