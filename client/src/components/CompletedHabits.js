import { useState } from "react";
import Habit from "./Habit";

const CompletedHabits = ({ completedHabits, onComplete }) => {

  return (
    <div className="container">
      <h3>COMPLETED</h3>
      {completedHabits.map( (habit) => (
        <Habit
          habit={habit}
          key={habit.id}
        />
      ))}
    </div>
  );
};

export default CompletedHabits;
