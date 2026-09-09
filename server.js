const express = require('express');
const cors = require('cors');
//const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = 'cd6a248ef6e44f29877d1d42ccf62b72';

app.use(cors());

app.get('/api/matches', async (req, res) => {
  try {
    const date = req.query.date || new Date().toISOString().split('T')[0];
    const response = await fetch(
      `https://api.football-data.org/v4/matches?date=${date}`,
      { headers: { 'X-Auth-Token': API_KEY } }
    );
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(PORT, () => console.log(`Server on port ${PORT}`));
