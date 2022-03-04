import './index.css';
import { useState } from 'react'
import Header from './components/Header'
import Habits from './components/Habits'

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
  ])

  // Add a habit
  const addHabit = (habit) => {
    // Add a new ID field to the given habit object provided from the form submission
    const newHabit = {
      id: Math.floor(Math.random() * 10000) + 1,
      text: "New Habit, Edit Me!",
      streak: 0,
      targetStreak: 0,
      completed: false,
    }
    // Alter state by appending the new habit object to the list with the spread operator
    setHabits([...habits, newHabit])
  }

  // Edit the 
  const editHabit = (id, text, targetStreak) => {
    setHabits(habits.map((habit) => habit.id === id ? {...habit, text: text, targetStreak: targetStreak} : habit))
  }

  return (
    <div>
      <Header title="welcome angella to trainee 3"/>
      <Habits habits={habits} onAdd={addHabit} onEdit={editHabit} />
    </div>
  );
}

export default App;
