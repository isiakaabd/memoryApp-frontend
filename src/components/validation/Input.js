import React, { useCallback } from 'react';
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
  memo,
  setMemo,
  ...props
}) => {
  const focus = useCallback(() => {
    setMemo(true);
  }, []);

  return (
    <TextField
      error={error ? error : null}
      id={id}
      label={label}
      name={name}
      fullWidth
      autoFocus={!memo && type === 'email' && true}
      onFocus={type === 'email' ? focus : null}
      value={value}
      variant="standard"
      onChange={onChange}
      helperText={error}
      {...props}
    />
  );
};
CustomTextFied.propTypes = {
  error: PropTypes.bool,
  value: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  memo: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  text: PropTypes.string,
  setMemo: PropTypes.func,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const Input = ({ label, name, setMemo, type, memo, ...rest }) => {
  return (
    <Grid container>
      <Field
        as={CustomTextFied}
        id={name}
        memo={memo}
        setMemo={setMemo}
        type={type}
        name={name}
        label={label}
        {...rest}
      />
    </Grid>
  );
};
Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  memo: PropTypes.string,
  setMemo: PropTypes.func,
};

export default Input;
