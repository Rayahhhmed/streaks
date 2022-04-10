import Habit from "./Habit";

const CompletedHabits = ({ habits }) => {
  return (
    <div className="container">
      <h2 className="completedNotCompletedHeader">Completed</h2>
      {habits
        .filter((habit) => habit.streak >= habit.targetStreak)
        .map((habit) => (
          <Habit habit={habit} key={habit.id} />
        ))}
    </div>
  );
};

export default CompletedHabits;
