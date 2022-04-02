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

app.get("/habits/:id", (req, res) => {
  // Find the habit with id in habits. habit.id is a string, created with nanoid()
  const found = habits.find((habit) => habit.id === req.params.id);

  if (found) {
    // If a habit with the id is found, display on page.
    res.json(found);
  } else {
    // Habit with that id was never found.
    res.status(400).json({ msg: `No habit with the id of ${req.params.id} ` });
  }
});

app.post("/habits", (req, res) => {});

app.put("/habits/:id", (req, res) => {});

app.delete("/habits/:id", (req, res) => {
  const deleted_habit = habits.find((habit) => habit.id === req.params.id);
  if (deleted_habit) {
    habits = habits.filter((habit) => habit.id !== req.params.id);
    res.json(deleted_habit);
  } else {
    res
      .status(400)
      .json({ msg: `No habit with the id of ${req.params.id} to delete` });
  }
});

let habits = initHabits();
console.log(habits);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
