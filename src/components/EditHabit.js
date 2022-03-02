import { Input } from '@mui/material';
import { Button } from '@mui/material';
import { useState } from 'react';

const EditHabit = ({ habit, onEdit }) => {
  const [text, setText] = useState(habit.text)
  const [target, setTarget] = useState(habit.targetStreak)

  return (
    <div className='editHabit'>
        <Input 
          type='text'
          placeholder='New Habit Name'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Input
          type='number'
          placeholder='Target Streak' 
          value={target}
          size='medium'
          min='1'
          onChange={(e) => setTarget(e.target.value)}
          style={{ width: 120 }}
        />
        <Button onClick={() => onEdit(habit.id, text, target)}>Edit Habit</Button>
    </div>
  )
}

export default EditHabit