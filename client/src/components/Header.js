import { Button } from "@mui/material";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const Header = ({ redirectTo, redirectPath }) => {
  return (
    <>
      <div className="myprofilebox">
        <Typography variant="h3" color="primary" className="title">
          Streaks
        </Typography>
        <Button
          variant="outlined"
          style={{ margin: 10 }}
          component={Link}
          to={redirectPath}
        >
          {redirectTo}
        </Button>
      </div>
      <ColoredLine color="black" />
    </>
  );
};

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 5,
    }}
  />
);

export default Header;
