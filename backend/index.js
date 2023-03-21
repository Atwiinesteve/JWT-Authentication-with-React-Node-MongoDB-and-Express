// database connections
require('./database/db_connections');

// importing node modules
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv/config');

// import configs
const corsOptions = require('./configs/cors');

// application initialization
const app = express();
const PORT = process.env.PORT||3000;

// cors settings
app.use(cors(corsOptions));

// other middlewares
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

// server initialization
app.listen(PORT, function() {
    console.log(`Server Listening on http://localhost:${PORT}`);
})