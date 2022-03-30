import React from "react";
import { makeStyles } from "@mui/styles";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./components-style.css";

const useStyles = makeStyles({
  root: {
    // background: "black !important",
    borderRadius: 1,
    color: "#B75D69 !important",
    height: 38,
    // padding: "0 30px",
    display: "inline",
  },
});

const HomePageButton = () => {
  const classes = useStyles();
  return (
    <div>
      <Stack spacing={2} direction="row">
        <Button variant="text" className={classes.root}>
          Home Page
        </Button>
      </Stack>
    </div>
  );
};

export default HomePageButton;
