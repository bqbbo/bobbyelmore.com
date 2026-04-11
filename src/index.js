import 'dotenv/config.js';
import express from 'express';

const PORT = process.env.APPLICATION_PORT || 8000;

const app = express();

app.get("/", (req, res) => {
  res.send("welcome!<br>i lowkey should code this but im kinda lazy so check back later when i have more claude code tokens 🥲🥲🥲");
});

app.listen(PORT, () => {
  console.log(`bobbyelmore.com backend is running on port ${PORT}`);
});
