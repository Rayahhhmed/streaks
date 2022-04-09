import { useState } from "react";
import { Button } from "@mui/material";
import EditHabit from "./EditHabit";
import EditDeleteMenu from "./EditDeleteMenu";
import Confetti from "react-dom-confetti";

const Habit = ({ habit, onEdit, onDelete, onComplete, onReset }) => {
  const [showEdit, setShowEdit] = useState(false);
  const toggleEdit = () => {
    setShowEdit(!showEdit);
  };

  const [progressFilled, setProgressFill] = useState(
    (habit.streak / habit.targetStreak) * 100
  );

  const [showConfetti, setShowConfetti] = useState(false);

  const incrementProgress = () => {
    setProgressFill(((habit.streak + 1) / habit.targetStreak) * 100);

    if (((habit.streak + 1) / habit.targetStreak) * 100 == 100) {
      setShowConfetti(true);
    }
  };

  return (
    <div
      className="habitBox"
      style={{
        background: `linear-gradient(90deg, #c0e7ff ${progressFilled}%, #FFFFFF ${progressFilled}%`,
      }}
    >
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

          {!!onComplete && (
            <Button
              onClick={() => {
                onComplete(habit.id);
                incrementProgress();
              }}
            >
              Complete
              <Confetti active={showConfetti} />
            </Button>
          )}

          {!!onReset && (
            <Button
              onClick={() => {
                onReset(habit.id);
                setProgressFill(0);
                setShowConfetti(false);
              }}
            >
              Reset
            </Button>
          )}

          {!!onDelete && (
            <EditDeleteMenu
              habit={habit}
              onDelete={onDelete}
              toggleEdit={toggleEdit}
              disable={showEdit}
            ></EditDeleteMenu>
          )}
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
