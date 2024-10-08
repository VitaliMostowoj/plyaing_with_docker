console.log("Hello World")

const express = require('express');
const app = express();
const PORT = 3000;

// Define a GET route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});