import "./index.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Habits from "./components/Habits";

function App() {
  // Initialise habits to an empty list
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const fetchHabits = async () => {
      const res = await fetch("http://localhost:8000/habits");
      const fetchedHabits = await res.json();
      setHabits(fetchedHabits);
    };

    fetchHabits();
  });

  // Add a habit
  const addHabit = async (habit) => {
    // Add a new ID field to the given habit object provided from the form submission
    const newHabit = {
      text: "New Habit, Edit Me!",
      targetStreak: 1,
    };

    const res = await fetch("http://localhost:8000/habits", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newHabit),
    });

    const newH = await res.json();

    setHabits([...habits, newH]);
  };

  // Edit the Habit
  const editHabit = async (id, text, targetStreak) => {
    await fetch(`http://localhost:8000/habits/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        text: text,
        targetStreak: targetStreak,
      }),
    });

    setHabits(
      habits.map((habit) =>
        habit.id === id && targetStreak >= 0 && targetStreak >= habit.streak
          ? {
              ...habit,
              text: text ? text : habit.text,
              targetStreak: parseInt(targetStreak, 10),
            }
          : habit
      )
    );
  };

  // Delete Habit
  const deleteHabit = async (id) => {
    await fetch(`http://localhost:8000/habits/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  // Increment Habit
  const incrementStreak = async (id) => {
    await fetch(`http://localhost:8000/habits/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        incrementStreak: true,
      }),
    });

    setHabits(
      habits.map((habit) =>
        habit.id === id && habit.streak < habit.targetStreak
          ? { ...habit, streak: habit.streak + 1 }
          : habit
      )
    );
  };

  // Resets the streak counter to zero for a habit
  const resetStreak = async (id) => {
    await fetch(`http://localhost:8000/habits/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        resetStreak: true,
      }),
    });

    setHabits(
      habits.map((habit) => (habit.id === id ? { ...habit, streak: 0 } : habit))
    );
  };

  return (
    <div>
      <Header title="welcome angella to trainee 3" />
      <Habits
        habits={habits}
        onAdd={addHabit}
        onEdit={editHabit}
        onDelete={deleteHabit}
        onComplete={incrementStreak}
        onReset={resetStreak}
      />
    </div>
  );
}

export default App;
