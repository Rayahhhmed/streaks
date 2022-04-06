import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const AddHabitButton = ({ onAdd }) => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [targetStreak, setTargetStreak] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    if (!text) {
      alert("Please enter habit text");
      return;
    }

    onAdd(text, targetStreak);
    setText("");
    setTargetStreak(0);
    setOpen(false);
  };

  return (
    <div className="addHabitButton">
      <Button onClick={handleClickOpen} fullWidth style={{ borderRadius: 8 }}>
        <h3>+</h3>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Habit</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="normal"
            type="text"
            id="text"
            label="Habit Text"
            variant="standard"
            onChange={(e) => setText(e.target.value)}
            fullWidth
          />
          <TextField
            margin="normal"
            type="number"
            id="streak"
            label="Target Streak"
            variant="standard"
            value={targetStreak}
            onChange={(e) =>
              setTargetStreak(
                e.target.value >= 0 ? e.target.value : targetStreak
              )
            }
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}>Add New Habit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddHabitButton;
