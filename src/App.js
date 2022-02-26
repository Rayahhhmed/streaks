import './index.css';
import { useState } from 'react'
import Header from './components/Header'
import Habits from './components/Habits'

function App() {
  const [habits, setHabits] = useState([
    {
      id: 1,
      text: 'have a proper sleep schedule',
      streak: 3,
      targetStreak: 14,
      completed: false,
    },
    {
      id: 2,
      text: 'be happy',
      streak: 3,
      targetStreak: null,
      completed: false,
    },
  ])
  return (
    <div className="App">
      <Header title="welcome angella to trainee 3"/>
      <Habits habits={habits}/>
    </div>
  );
}

export default App;
