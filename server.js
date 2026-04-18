const express = require('express');
const app = express();
const port = 12000;

app.get('/turtle', (req, res) => {
    res.json({
        species: "Green Sea Turtle",
        status: "Protected",
        location: "Pacific Ocean"
    });
});

app.listen(port, () => {
    console.log(`Turtle API server running at http://localhost:${port}`);
});
