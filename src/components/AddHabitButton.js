import { Button } from '@mui/material'
import React from 'react'

const AddHabitButton = ({ onAdd }) => {
  return (
    <div className="addHabitButton">
      <Button onClick={onAdd} fullWidth style={{ height: 50, borderRadius: 8 }}>
        <h3>
          +
        </h3>
      </Button>
    </div>
  )
}

export default AddHabitButton