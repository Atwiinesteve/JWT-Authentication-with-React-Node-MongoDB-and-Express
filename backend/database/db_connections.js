// importing modules
const mongoose = require('mongoose');
require('dotenv/config');

const connect = mongoose.connect(process.env.DATABASE_URL, {}).then(() => {
    console.log(`Database Connection Established Successfully..`)
}).catch((error) => {
    console.log(`Database Connection Failed: ${error.message}`)
});

module.exports = {connect};