import { useState } from "react";
import { Button } from "@mui/material";
import EditHabit from "./EditHabit";
import EditDeleteMenu from "./EditDeleteMenu";

const Habit = ({ habit, onEdit, onDelete, isEditing, onComplete, onReset }) => {
  const [showEdit, setShowEdit] = useState(isEditing);
  const toggleEdit = () => {
    setShowEdit(!showEdit);
  };
  // form api access field -> to showEdit or not showEdit

  return (
    <div className="habitBox">
      <div className="habit">
        <h3 className="habitText">
          {/* If text is empty: set text to 'Change me!': ooo text is sentient */}
          {habit.text ? habit.text : "Change me!"}
        </h3>

        <h3 className="streak">
          <div>
            {habit.streak}
            {/* Ternary operator: only display targetStreak if it exists (non-zero) */}
            {habit.targetStreak ? `/${habit.targetStreak} ` : " "}
            days
          </div>

          <Button onClick={() => onComplete(habit.id)}>
            Complete
            {/* <CheckIcon style={{ color: 'green' }} /> */}
          </Button>

          <Button onClick={() => onReset(habit.id)}>Reset</Button>

          <EditDeleteMenu
            habit={habit}
            onDelete={onDelete}
            toggleEdit={toggleEdit}
            disable={showEdit}
          ></EditDeleteMenu>
        </h3>
      </div>

      {/* Only show the EditHabit component if toggled on */}
      {showEdit && (
        <EditHabit
          habit={habit}
          onEdit={onEdit}
          onDelete={onDelete}
          toggleEdit={toggleEdit}
        />
      )}
    </div>
  );
};

export default Habit;
