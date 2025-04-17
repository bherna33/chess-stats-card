const express = require('express');
const axios = require('axios');
const ejs = require('ejs');

const app = express();
const PORT = process.env.PORT || 3000;

// Template engine setup
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Route to generate Chess card
app.get('/api/chess', async (req, res) => {
    const username = req.query.username || 'magnuscarlsen';  // Default to Magnus Carlsen's username
    const apiUrl = `https://api.chess.com/pub/player/${username}`;

    try {
        // Fetch player data from Chess.com API
        const { data } = await axios.get(apiUrl);

        const { username: playerName, status, avatar, rating } = data;

        // Create an SVG card using EJS template
        res.set('Content-Type', 'image/svg+xml');
        res.render('card', { playerName, status, avatar, rating });
    } catch (error) {
        res.status(500).send('Error fetching Chess.com data');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
