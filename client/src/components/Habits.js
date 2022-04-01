import Habit from "./Habit";
import AddHabitButton from "./AddHabitButton";


const Habits = ({ habits, onAdd, onEdit, onDelete, onComplete, onReset}) => {

  return (
    <div className="container">
      {habits.map((habit) => (
        <Habit
          habit={habit}
          key={habit.id}
          onEdit={onEdit}
          onDelete={onDelete}

          onComplete={onComplete}
          isEditing={habit.isEditing}
          onReset={onReset}

        />
      ))}
      <AddHabitButton onAdd={onAdd} />
    </div>
  );
};

export default Habits;