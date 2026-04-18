const express = require("express");
const app = express();

app.use(express.json());

// Root endpoint
app.get("/", (req, res) => {
  res.status(200).json({ message: "API is running" });
});

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({ message: "healthy" });
});

// Personal info
app.get("/me", (req, res) => {
  res.status(200).json({
    name: "Chidera Pamela Alaeto",
    email: "chideraalaeto92@gmail.com",
    github: "https://github.com/ChideraA080"
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
