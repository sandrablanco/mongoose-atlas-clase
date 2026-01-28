require('dotenv').config();
console.log('ENV:', process.env.MONGO_URI);
const express = require('express');
const app = express();
const PORT = 8080;
const { dbConnection } = require('./config/config');
const routes = require('./routes');

app.use(express.json());

app.post('/', (req, res) => {
  res.json({
    message: 'POST funcionando',
    body: req.body
  });
});

app.use('/', routes);

dbConnection();

app.listen(PORT, () => console.log(`Server started on port ${process.env.PORT}`));