import { Checkbox } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { Button } from "@mui/material";

export default function Habit({ habit }) {
  return (
    <div className='habit'>
      <h3>
        {habit.text}
      </h3>
      <h3 className='streak'>
        {habit.streak}
        {/* Ternary operator: only display targetStreak if it exists */}
        {habit.targetStreak ? `/${habit.targetStreak} ` : ' '} 
        days
        <Button>
          <EditIcon />
        </Button>
      </h3>
    </div>
  )
}
