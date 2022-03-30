import React from "react";
import { makeStyles } from "@mui/styles";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

// do this to over ride material UI styles
const useStyles = makeStyles({
  root: {
    borderRadius: 1,
    color: "#B75D69 !important",
    height: 38,
    // padding: "0 30px",
    display: "inline",
  },
});

const AboutPageButton = () => {
  const classes = useStyles();

  return (
    <div>
      <Stack spacing={2} direction="row">
        <Button variant="text" className={classes.root}>
          About Page
        </Button>
      </Stack>
    </div>
  );
};

export default AboutPageButton;
