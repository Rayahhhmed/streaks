import { Checkbox } from "@mui/material";


export default function Habit({ habit }) {
  return (
    <div className='habit'>
      <h4>
        {habit.text}
      </h4>
      <h4 className='yes'>
        {habit.streak}
        {habit.targetStreak ? `/${habit.targetStreak} ` : ' '} 
        days
        <Checkbox style={{ height: 15 }}/>
      </h4>
    </div>
  )
}
