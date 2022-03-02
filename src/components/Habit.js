import { useState } from 'react';
import { Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
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
          {habit.text ? habit.text : 'Change me!'}
        </h3>

        <h3 className='streak'>
          <div>
            {habit.streak}
            {/* Ternary operator: only display targetStreak if it exists */}
            {habit.targetStreak ? `/${habit.targetStreak} ` : ' '} 
            days
          </div>
          <Button onClick={toggleEdit}>
            <EditIcon />
          </Button>
        </h3>
      </div>

      {showEdit && <EditHabit habit={habit} onEdit={onEdit} />}
    </div>
  )
}
