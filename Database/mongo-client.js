if (process.env.NODE_ENV !== 'PRODUCTION') {
    require('dotenv').config();
}
const mongoclient= require('mongodb').MongoClient;

const connection = new mongoclient( process.env.DB_URL);

async function getDb (){
    let db=connection.db('Guilt_wallet_db')
    db=db.collection('User')
    return db;
}

module.exports = { getDb, connection };
