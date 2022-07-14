const express = require('express');
const authRouter = require('./routes/authRoute');
const usersRouter = require('./routes/usersRoute');
const categoriesRouter = require('./routes/categoriesRoute');
// const bodyParser = require('body-parser');

// ...

const app = express();

app.use(express.json());
// app.use(bodyParser.json());

// ...
app.use('/login', authRouter);

app.use('/user', usersRouter);

app.use('/categories', categoriesRouter);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
