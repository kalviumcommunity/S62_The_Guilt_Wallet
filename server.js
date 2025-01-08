const express = require('express');
const app = express();
const connect_db = require('./Database/database');
if (process.env.NODE_ENV !== 'PRODUCTION') {
    require('dotenv').config();
  }


  app.get('/home', async (req, res) => {
    const dbStatus = await connect_db();
    res.send(`Database Connection Status: ${dbStatus}`);
  });

const port = 3000;
app.listen(port, () => {
    connect_db();
    console.log(`Server is running on http://localhost:${port}`);
});
