import { Button } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from '@mui/material/Box';

import { spacing } from '@mui/system';


const Header = ({ title }) => {
  return (
    <>
    <div id="myprofilebox">
      <Typography variant="h4" color="primary" id="title">
        STREAKS
      </Typography>
      
      <Button variant="outlined" style={{textTransform: 'none'}}>My Profile</Button>
      
      </div>
      <ColoredLine color="black" />
    </>
  )
}

const ColoredLine = ( {color} ) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 5
    }}
  />
);

export default Header