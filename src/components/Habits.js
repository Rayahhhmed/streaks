import { Button } from '@mui/material'
import Habit from './Habit'
import AddHabitButton from './AddHabitButton'

const Habits = ({ habits }) => {
  return (
    <div>
      {habits.map((habit) => (
        <Habit habit={habit}/>
      ))}
      <AddHabitButton />
    </div>
  )
}

export default Habits