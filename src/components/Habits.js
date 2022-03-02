import Habit from './Habit'
import AddHabitButton from './AddHabitButton'

const Habits = ({ habits, onAdd }) => {
  return (
    <div>
      {habits.map((habit) => (
        <Habit habit={habit} key={habit.id} />
      ))}
      <AddHabitButton onAdd={onAdd} />
    </div>
  )
}

export default Habits