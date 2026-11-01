const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// GET /
app.get("/", (request, response) => {
    response.status(200).send("Welcome to my Lab 1 server!");
});

// GET /about
app.get("/about", (request, response) => {
    response.status(200).json({
        name: "JAHNAVI MANIVISHETTI",
        section: "CSE FSD 2B (309)"
    });
});

// GET /time
app.get("/time", (request, response) => {
    const currentTime = new Date();
    response.status(200).send(`Current Date and Time: ${currentTime}`);
});

// Handle unknown routes — 404 Not Found
app.use((request, response) => {
    response.status(404).send("404 - Page Not Found");
});

app.listen(PORT, () => {
    console.log(`Express server is running at http://localhost:${PORT}`);
});
