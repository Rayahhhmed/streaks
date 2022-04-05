import { MenuItem, Button, Menu } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const EditDeleteMenu = ({ habit, onDelete, toggleEdit, disable }) => {
  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);

  // Positions the drop down at the button when clicked.
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl();
  };

  return (
    <div className="verticalMenu">
      {/* The kebab menu icon */}
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem>
			{/* Button is disabled when showEdit */}
          <Button disabled={disable} onClick={toggleEdit}>
            <EditIcon /> Edit Habit
          </Button>
        </MenuItem>

        <MenuItem>
          <Button onClick={() => onDelete(habit.id)}>
            <DeleteIcon style={{ color: "red" }} /> Delete Habit
          </Button>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default EditDeleteMenu;
