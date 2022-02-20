import React from 'react';
import { FormControlLabel, Checkbox, Grid } from '@mui/material';
import PropTypes from 'prop-types';

const Checkboxs = ({ label }) => {
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
