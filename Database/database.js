if (process.env.NODE_ENV !== 'PRODUCTION') {
    require('dotenv').config();
}
const mongoose = require('mongoose');

const connect_db = async () => {
    try {
        const data = await mongoose.connect(process.env.connect);
        console.log(`Database is connected successfully: ${data.connection.host}`);
        return 'Connected';
    } catch (er) {
        console.log('Database connection failed..', er.message);
        return `Failed to connect: ${er.message}`;
    }
};



module.exports = connect_db;