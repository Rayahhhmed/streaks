import "./index.css";
import { useState } from "react";
import Header from "./components/Header";
import Habits from "./components/Habits";
import { nanoid } from 'nanoid'

function App() {
  // Initialise habits to an empty list
  const [habits, setHabits] = useState([
    // // Predefined habits for now
    // {
    //   id: 1,
    //   text: 'Have a proper sleep schedule',
    //   streak: 13,
    //   targetStreak: 14,
    //   completed: false,
    // },
    // {
    //   id: 2,
    //   text: 'Be happy ;(',
    //   streak: 1,
    //   targetStreak: 0,
    //   completed: false,
    // },
  ]);

  // Add a habit
  const addHabit = (habit) => {
    // Add a new ID field to the given habit object provided from the form submission
    const newHabit = {
      id: nanoid(),
      text: "New Habit, Edit Me!",
      streak: 0,
      targetStreak: 0,
      completed: false,
      isEditing: true,
    };
    // useeffect for fetch
    // Alter state by appending the new habit object to the list with the spread operator # Kel
    // Click into editHabbit # Kel

    // button should be create # Kel

    setHabits([...habits, newHabit]);
  };

  // Edit the
  const editHabit = (id, text, targetStreak) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id
          ? { ...habit, text: text, targetStreak: targetStreak }
          : habit
      )
      // button should be edit # Kel
    );
  };

  // Delete Habit
  const deleteHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  return (
    <div>
      <Header title="welcome angella to trainee 3" />
      <Habits
        habits={habits}
        onAdd={addHabit}
        onEdit={editHabit}
        onDelete={deleteHabit}
      />
    </div>
  );
}

export default App;
