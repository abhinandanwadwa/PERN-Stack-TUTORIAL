const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

// Middlewares:
app.use(cors());
app.use(express.json());


// Starting the server.
app.listen(8181, () => {
    console.log('The server has started on the port 8181');
});