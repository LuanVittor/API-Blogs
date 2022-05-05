# Boas vindas ao repositório do API de Blogs!

 O projeto consiste em uma API que realiza um CRUD (Create, Read, Update e Delete) de posts de blog. Para criação das tabelas do banco de dados, foi utilizado a técnica de Mapeamento Objeto-Relacional (`ORM`) através do pacote `sequelize` do Node.js. Foram feitas autenticações de usuários através do pacote `jsonwebtoken`.<br />
 A implementação do código foi feita baseada na arquitetura de software MSC (Model-Service-Controller)
 
# Tecnologias Usadas
 - Node.js
 - Sequelize
 - Express
 - JavaScript
 - MySQL
 - JsonWebToken


## O que foi desenvolvido

### 1 - Criação do endpoint POST `/user`

![Cadastro com sucesso](./public/cadastrodeusuario.png)

### 2 - Criação do endpoint POST `/login`

![Login com sucesso](./public/logincomsucesso.png)

### 3 - Criação do endpoint GET `/user`

![Listar usuários](./public/listarusuarios.png)

### 4 - Criação do endpoint GET `/user/:id`

![Listar um usuário](./public/listarumusuario.png)

### 5 - Criação do endpoint POST `/categories`

![Criar categoria com sucesso](./public/cadastrarCategoria.png)

### 6 - Criação do endpoint GET `/categories`

![Buscar todas as categoria com sucesso](./public/buscartodascategoriascomsucesso.png)

### 7 - Criação do endpoint POST `/post`

![Criar blogspot com sucesso](./public/criarblogpost.png)

### 8 - Criação do endpoint GET `/post`

![Criar blogspot com sucesso](./public/listarumblogpost.png)

### 9 - Criação do endpoint GET `post/:id`

![Listar um post com sucesso](./public/listarumpostcomsucesso.png)

### 10 - Criação do endpoint PUT `/post/:id`

![blogpost com token inválido](./public/editarpostcomsucesso.png)

### 11 - Criação do endpoint DELETE `post/:id`

![blogpost com token inválido](./public/deletarpostcomsucesso.png)

### 12 - Criação do endpoint DELETE `/user/me`

![Deletar com sucesso](./public/deletarcomsucesso.png)

### 13 - Criação do endpoint GET `post/search?q=:searchTerm`

![blogpost com token inválido](./public/buscarpostpelotitle.png)

![blogpost com token inválido](./public/buscarpostpelocontent.png)

![blogpost com token inválido](./public/listarpostcampovazio.png)

![blogpost com token inválido](./public/listarumpostquenaoexiste.png)


### Rodando o Projeto Localmente

1° - Clone o repositório para sua máquina<br />

2° `cd project-blogs-api` - Entre na pasta do repositório clonado<br />

3° `npm install` - Instale as depedências<br />

4° `npm start` - Execute o programa<br />

#### Conexão com o Banco 

Para que o projeto rode em sua máquina, você deve criar as seguintes variáveis de ambiente:

`host: process.env.HOSTNAME` <br />
`user: process.env.MYSQL_USER`<br />
`password: process.env.MYSQL_PASSWORD` <br />
