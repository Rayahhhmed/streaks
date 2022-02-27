import './index.css';
import { useState } from 'react'
import Header from './components/Header'
import Habits from './components/Habits'

function App() {
  // Predefined habits for now
  const [habits, setHabits] = useState([
    {
      id: 1,
      text: 'have a proper sleep schedule',
      streak: 13,
      targetStreak: 14,
      completed: false,
    },
    {
      id: 2,
      text: 'be happy ;(',
      streak: 1,
      targetStreak: null,
      completed: false,
    },
  ])

  const addHabit = (habit) => {
    const id = Math.floor(Math.random() * 10000) + 1
    // Add a new ID field to the given habit object provided from the form submission
    const newHabit = {id, ...habit}
    // Alter state by appending the new habit object to the list with the spread operator
    setHabits([...habits, newHabit])
  }

  return (
    <div className="container">
      <Header title="welcome angella to trainee 3"/>
      <Habits habits={habits}/>
    </div>
  );
}

export default App;
