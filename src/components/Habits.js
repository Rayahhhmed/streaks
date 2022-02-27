import { Button } from '@mui/material'
import Habit from './Habit'
import AddHabitButton from './AddHabitButton'

const Habits = ({ habits, onAdd }) => {
  return (
    <div>
      {habits.map((habit) => (
        <Habit habit={habit}/>
      ))}
      <AddHabitButton onAdd={onAdd}/>
    </div>
  )
}

export default Habits