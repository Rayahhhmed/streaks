const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors());

const initHabits = () => {
  const data = fs.readFileSync("data.json");
  return JSON.parse(data);
};

const storeHabits = () => {
  fs.writeFileSync("data.json", JSON.stringify(habits));
};

app.get("/habits", (req, res) => {
  res.json(habits);
});

app.get("/habits/:id", (req, res) => {});

app.post("/habits", (req, res) => {});

app.put("/habits/:id", (req, res) => {});

app.delete("/habits/:id", (req, res) => {});

const habits = initHabits();
console.log(habits);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
