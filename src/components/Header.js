import { Button, ButtonBase } from '@mui/material';
import { DeleteIcon } from '@mui/icons-material/Delete';

const Header = ({ title }) => {
  return (
    <div>
      <Button variant='outlined' startIcon={<DeleteIcon/>}>{title}</Button>
    </div>
  )
}

export default Header