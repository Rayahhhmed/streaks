const express = require("express");

const app = express();
const PORT = 8000;

app.use(express.json());

app.get("/habits", (req, res) => {});

app.get("/habits/:id", (req, res) => {});

app.post("/habits", (req, res) => {});

app.put("/habits/:id", (req, res) => {});

app.delete("/habits/:id", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
