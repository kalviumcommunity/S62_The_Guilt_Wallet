const express = require('express');
const app = express();
const { getDb, connection } = require('./Database/mongo-client.js');
const connect_db = require('./Database/database.js');
if (process.env.NODE_ENV !== 'PRODUCTION') {
    require('dotenv').config();
  }
  app.use(express.json());

app.get('/', async (req, res) => {
  const checkStatus = await connection.connect();
  const readyState = connection.topology.isConnected()
    ? 'connected'
    : 'disconnected';
    res.send(`<h3>Database Connection Status : ${readyState}</h3>`);
});



 app.use('/user-router', require('./routes/routes.js'));
  
const port = 3000;
app.listen(port, () => {
 
    console.log(`Server is running on http://localhost:${port}`);
});
