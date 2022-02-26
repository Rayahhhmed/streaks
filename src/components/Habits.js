import Habit from './Habit'

const Habits = ({ habits }) => {
  return (
    <div>
      {habits.map((habit) => (
        <Habit habit={habit}/>
      ))}
    </div>
  )
}

export default Habits