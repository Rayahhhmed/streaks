import Habit from "./Habit";
import AddHabitButton from "./AddHabitButton";

const Habits = ({ habits, onAdd, onEdit, onDelete, onComplete, onReset }) => {
  return (
    <div className="container">
      <h2 className="completedNotCompletedHeader">Not Completed</h2>
      {habits.map((habit) => (
        <Habit
          habit={habit}
          key={habit.id}
          onEdit={onEdit}
          onDelete={onDelete}
          onComplete={onComplete}
          onReset={onReset}
        />
      ))}
      <AddHabitButton onAdd={onAdd} />
    </div>
  );
};

export default Habits;
