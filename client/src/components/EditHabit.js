import { Input, InputLabel, Button } from "@mui/material";
import { useState } from "react";

const EditHabit = ({ habit, onEdit, toggleEdit }) => {
  const [text, setText] = useState(habit.text);
  const [targetStreak, setTargetStreak] = useState(habit.targetStreak);

  return (
    <div className="editHabit">
      <div>
        <InputLabel>Habit Name</InputLabel>
        <Input
          type="text"
          placeholder="New Habit Name"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ width: 125 }}
        />
      </div>

      <div>
        <InputLabel>Target Streak</InputLabel>
        <Input
          type="number"
          placeholder="Target Streak"
          value={targetStreak}
          size="medium"
          onChange={(e) => setTargetStreak(Math.max(e.target.value, 1))}
          style={{ width: 110 }}
        />
      </div>

      <Button
        onClick={() => {
          onEdit(habit.id, text, targetStreak);
          toggleEdit();
        }}
      >
        Save Changes
      </Button>
    </div>
  );
};

export default EditHabit;
