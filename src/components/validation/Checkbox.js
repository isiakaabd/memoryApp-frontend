import React from 'react';
import { FormControlLabel, Checkbox, Grid } from '@mui/material';
import PropTypes from 'prop-types';

const Checkboxs = ({ label }) => {
  return (
    <Grid container>
      <FormControlLabel label={label} control={<Checkbox color="info" />} />
    </Grid>
  );
};
export default Checkboxs;
Checkboxs.propTypes = {
  label: PropTypes.string.isRequired,
};
