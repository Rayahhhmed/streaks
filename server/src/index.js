const express = require("express");
const fs = require("fs");
const cors = require("cors");
const uuid = require("uuid");

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

app.post("/habits", (req, res) => {
  const newHabit = {
    id: uuid.v4(),
    text: req.body.text,
    streak: 0,
    targetStreak: req.body.targetStreak,
    completed: false,
    isEditing: true,
  };

  if (!newHabit.text) {
    return res.status(400).json({ msg: "Please include habit text" });
  }

  habits.push(newHabit);
  storeHabits();
  res.json(newHabit);
});

app.put("/habits/:id", (req, res) => {
  const found = habits.find((habit) => habit.id === req.params.id);

  if (found) {
    const updatedHabit = req.body;
    habits.forEach((habit) => {
      if (habit.id === req.params.id) {
        habit.text = updatedHabit.text ? updatedHabit.text : habit.text;
        habit.targetStreak = updatedHabit.targetStreak
          ? updatedHabit.targetStreak
          : habit.targetStreak;

        storeHabits();
        res.json({ msg: "Habit updated", habit });
      }
    });
  } else {
    res.status(400).json({ msg: `No habit with the id of ${req.body.id}` });
  }
});

app.delete("/habits/:id", (req, res) => {
  const deleted_habit = habits.find((habit) => habit.id === req.params.id);
  if (deleted_habit) {
    habits = habits.filter((habit) => habit.id !== req.params.id);
    storeHabits();
    res.json(deleted_habit);
  } else {
    res
      .status(400)
      .json({ msg: `No habit with the id of ${req.params.id} to delete` });
  }
});

let habits = initHabits();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
