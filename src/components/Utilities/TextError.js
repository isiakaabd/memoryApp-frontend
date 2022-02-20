import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  color: {
    color: theme.palette.error.main,
    fontSize: "1.2rem",
  },
}));

export const TextError = ({ children }) => {
  const classes = useStyles();
  return <Grid className={classes.color}>{children}</Grid>;
};

TextError.propTypes = {
  children: PropTypes.node,
};
