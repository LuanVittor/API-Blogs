const express = require('express');
const { categorie, getAllCategories } = require('./controllers/categoriesController');
const { login } = require('./controllers/loginController');
const { user, getAllUsers, getUserById } = require('./controllers/userControler');
const auth = require('./middlewares/auth');
const { nameValidate, emailValidation, passwordValidation } = require('./middlewares/validateUser');

const app = express();

app.use(express.json());

app.post('/user', nameValidate, emailValidation, passwordValidation, user);
app.post('/login', emailValidation, passwordValidation, login);
app.get('/user', auth, getAllUsers);
app.get('/user/:id', auth, getUserById);
app.post('/categories', auth, categorie);
app.get('/categories', auth, getAllCategories);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
