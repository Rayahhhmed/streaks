import Habit from './Habit'
import AddHabitButton from './AddHabitButton'

const Habits = ({ habits, onAdd, onEdit }) => {
  return (
    <div className="container">
      {habits.map((habit) => (
        <Habit habit={habit} key={habit.id} onEdit={onEdit} />
      ))}
      <AddHabitButton onAdd={onAdd} />
    </div>
  )
}

export default Habits