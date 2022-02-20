import React from 'react';
import { FormControlLabel, Checkbox, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({}));
const Checkboxs = ({ label }) => {
  const classes = useStyles();
  return (
    <Grid container gap={1}>
      <FormControlLabel label={label} control={<Checkbox />} />
    </Grid>
  );
};
export default Checkboxs;
Checkboxs.propTypes = {
  label: PropTypes.string.isRequired,
};
