import { Input, InputLabel, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

const EditHabit = ({ habit, onEdit, onDelete, toggleEdit }) => {
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
          min="1"
          onChange={(e) => setTargetStreak(e.target.value)}
          style={{ width: 110 }}
        />
      </div>
      <Button onClick={() => {
         onEdit(habit.id, text, targetStreak)
         toggleEdit()}}>
        Save Changes
      </Button>
    </div>
  );
};

export default EditHabit;

