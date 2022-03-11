const jwt = require('jsonwebtoken');
const { Users } = require('../models');

const { JWT_SECRET } = process.env;

const getAllUsers = async (req, res) => {
  const allInfo = await Users.findAll({ attributes: { exclude: ['password'] } });
  return res.status(200).json(allInfo);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const allInfo = await Users.findAll({ where: { id }, attributes: { exclude: ['password'] } });
  if (!allInfo || !allInfo.length) return res.status(404).json({ message: 'User does not exist' });
  return res.status(200).json(allInfo[0]);
};

const user = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const emails = await Users.findAll({ where: { email } });
    console.log(emails);
    if (emails.length) {
      return res.status(409).json({ message: 'User already registered' });
    }
    await Users.create({ displayName, email, password, image });
    const token = jwt.sign({ data: email }, JWT_SECRET, {
      expiresIn: '10h',
    });
    return res.status(201).json({ token });
  } catch (e) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const deleteMe = async (req, res) => {
  const { data } = req.user;
    await Users.destroy({ where: { email: data } });
    return res.status(204).end();
};

module.exports = {
  user,
  getAllUsers,
  getUserById,
  deleteMe,
};