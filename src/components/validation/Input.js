import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';
import { Grid, TextField } from '@mui/material';

const CustomTextFied = ({
  text,
  error,
  id,
  type,
  name,
  onChange,
  label,
  value,
  setMemo,
  ...props
}) => {
  const focus = () => setMemo(true);
  return (
    <TextField
      error={error ? error : null}
      id={id}
      label={label}
      name={name}
      fullWidth
      autoFocus={false}
      onFocus={focus}
      value={value}
      variant="standard"
      onChange={onChange}
      helperText={error}
      {...props}
    />
  );
};
CustomTextFied.propTypes = {
  error: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  text: PropTypes.string,
  setMemo: PropTypes.func,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const Input = (props) => {
  const { label, name, setMemo, ...rest } = props;

  return (
    <Grid container>
      <Field as={CustomTextFied} id={name} setMemo={setMemo} name={name} label={label} {...rest} />
    </Grid>
  );
};
Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,

  setMemo: PropTypes.func,
};

export default Input;
