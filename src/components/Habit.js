import { useState } from 'react';
import { Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import EditHabit from './EditHabit';

export default function Habit({ habit, onEdit }) {
  const [showEdit, setShowEdit] = useState(false)
  const toggleEdit = () => {
    setShowEdit(!showEdit);
  }

  return (
    <div className='habitBox'>
      <div className='habit'>
        <h3 className='habitText'>
          {/* If text is empty: set text to 'Change me!': ooo text is sentient */}
          {habit.text ? habit.text : 'Change me!'}
        </h3>

        <h3 className='streak'>
          <div>
            {habit.streak}
            {/* Ternary operator: only display targetStreak if it exists (non-zero) */}
            {habit.targetStreak ? `/${habit.targetStreak} ` : ' '} 
            days
          </div>
          <Button onClick={toggleEdit}>
            <EditIcon />
          </Button>
          <Button>
            <CheckIcon style={{ color: 'green' }} />
          </Button>
        </h3>
      </div>

      {/* Only show the EditHabit component if toggled on */}
      {showEdit && <EditHabit habit={habit} onEdit={onEdit} />}
    </div>
  )
}
