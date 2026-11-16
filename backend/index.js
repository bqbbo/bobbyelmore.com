import "dotenv/config.js";
import express from "express";

const PORT = process.env.APPLICATION_PORT || 3000;

const app = express();

app.get("/api/status", (req, res) => {
    res.json({ message: "Backend is up" });
});

app.listen(PORT, () => {
    console.log(`bobbyelmore.com backend is running on port ${PORT}`);
});
