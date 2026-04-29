const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        const connect = await mongoose.connect(process.env.DB_CONNECTION_STRING)
        console.log(`Database connected: ${connect.connection.host}, ${connect.connection.name}`);
    } catch (err) {
        console.log(`Database conection failed: ${err}`);
        process.exit(1);
    }
}

module.exports = dbConnect;