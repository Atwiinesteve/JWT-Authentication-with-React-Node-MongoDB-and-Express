// importing node modules
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv/config');

// database connections
require('./database/db_connections');

// application initialization
const app = express();
const PORT = process.env.PORT||3000;

// server initialization
app.listen(PORT, function() {
    console.log(`Server Listening on http://localhost:${PORT}`);
})