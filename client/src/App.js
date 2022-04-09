import "./index.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Habits from "./components/Habits";
import CompletedHabits from "./components/CompletedHabits";

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
  const addHabit = async (text, targetStreak) => {
    // Add a new ID field to the given habit object provided from the form submission
    const newHabit = {
      text,
      targetStreak,
    };

    const res = await fetch("http://localhost:8000/habits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
        "Content-Type": "application/json",
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
        "Content-Type": "application/json",
      },
    });
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  // Increment Habit
  const incrementStreak = async (id) => {
    await fetch(`http://localhost:8000/habits/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
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
        "Content-Type": "application/json",
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

      <div className="mainContainer">
        <Habits
          habits={habits}
          onAdd={addHabit}
          onEdit={editHabit}
          onDelete={deleteHabit}
          onComplete={incrementStreak}
          onReset={resetStreak}
        />

        <CompletedHabits habits={habits} />
      </div>
    </div>
  );
}

export default App;
