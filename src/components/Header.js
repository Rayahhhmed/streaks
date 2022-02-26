import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Header = ({ title }) => {
  return (
    <div>
      <Button variant='outlined'>{title} <DeleteIcon /></Button>
    </div>
  )
}

export default Header