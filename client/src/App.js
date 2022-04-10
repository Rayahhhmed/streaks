import "./index.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Habits from "./components/Habits";
import CompletedHabits from "./components/CompletedHabits";
import background from "./background.jpg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";

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

    await fetch("http://localhost:8000/habits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newHabit),
    });
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
  };

  // Delete Habit
  const deleteHabit = async (id) => {
    await fetch(`http://localhost:8000/habits/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
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
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <div
              style={{
                backgroundImage: `url(${background})`,
                height: "1000px",
              }}
            >
              <Header redirectTo="About" redirectPath="/about" />

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
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
