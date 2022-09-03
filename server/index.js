const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

// Middlewares:
app.use(cors());
app.use(express.json());


// ROUTES //

// Create a TODO
app.post('/todos', async (req, res) => {
    try {

        const { description } = req.body;
        
        // TIME FOR SOME ACTUAL QUERIES BABY
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *",
            [description]
            );

        return res.status(200).json({ success: "A new TODO Added successfully!!", info: newTodo });
        
    } catch (error) {
        console.error(error.message);
    }
})

// Get ALl TODOS

// Get A TODO

// Update A TODO

// Delete A TODO


// Starting the server.
app.listen(8181, () => {
    console.log('The server has started on the port 8181');
});