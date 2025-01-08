const express = require('express');
const app = express();
const connect_db = require('./Database/database');
if (process.env.NODE_ENV !== 'PRODUCTION') {
    require('dotenv').config();
  }


  app.get('/ping', (req, res) => {
    res.send('Pong!');
});

const port = 3000;
app.listen(port, () => {
    connect_db();
    console.log(`Server is running on http://localhost:${port}`);
});
