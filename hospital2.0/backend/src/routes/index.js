const express = require('express');
const router = express.Router();

// Define your API routes here
router.get('/', (req, res) => {
    res.send('Welcome to the Hospital API');
});

// Add more routes as needed
// Example: router.get('/patients', (req, res) => { ... });

module.exports = router;