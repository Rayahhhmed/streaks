import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from "@mui/material";
import EditHabit from './EditHabit';

export default function Habit({ habit }) {
  const [showEdit, setShowEdit] = useState(false)
  const toggleEdit = () => {
    setShowEdit(!showEdit);
  }

  return (
    <div className='habitBox'>
      <div className='habit'>
        <h3>
          {habit.text}
        </h3>
        <h3 className='streak'>
          {habit.streak}
          {/* Ternary operator: only display targetStreak if it exists */}
          {habit.targetStreak ? `/${habit.targetStreak} ` : ' '} 
          days
          <Button onClick={toggleEdit}>
            <EditIcon />
          </Button>
        </h3>
      </div>

      {showEdit && <EditHabit />}
    </div>
  )
}
