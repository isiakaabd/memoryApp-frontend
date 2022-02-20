import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { TextError } from 'components/Utilities/TextError';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';

import { Grid, Typography, TextField } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  input: {
    ...theme.typography.input,
  },
  FormLabel: {
    '&.MuiFormLabel-root': {
      ...theme.typography.FormLabel,
    },
  },
}));

const CustomTextFied = ({ error, text, onChange, value, ...props }) => {
  console.log(props);
  return (
    <TextField
      error={error ? error : null}
      id="outlined-error"
      label="Error"
      value={value}
      variant="standard"
      onChange={onChange}
      helperText={text ? text : null}
    />
  );
};
CustomTextFied.propTypes = {
  error: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const LoginInput = (props) => {
  const { label, name, ...rest } = props;
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="body1" gutterBottom>
          {label}
        </Typography>
      </Grid>
      <Grid item>
        <Field as={CustomTextFied} id={name} name={name} {...rest} />
        <ErrorMessage name={name} component={TextError} />
      </Grid>
    </Grid>
  );
};
LoginInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default LoginInput;
