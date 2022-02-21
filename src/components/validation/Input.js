import React, { useCallback } from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';
import { Grid, TextField } from '@mui/material';

const CustomTextFied = ({
  text,
  error,
  id,
  types,
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
      error={!!error ? error : null}
      id={id}
      label={label}
      name={name}
      inputProps={{
        autoComplete: 'off',
      }}
      fullWidth
      autoComplete="off"
      autoSave="off"
      // autoFocus={!memo && types === 'email' && true}
      onFocus={types === 'email' ? focus : null}
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
  types: PropTypes.string,
  memo: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  text: PropTypes.string,
  setMemo: PropTypes.func,
  onChange: PropTypes.func.isRequired,
};

const Input = ({ label, name, setMemo, types, memo, ...rest }) => {
  return (
    <Grid container>
      <Field
        as={CustomTextFied}
        id={name}
        memo={memo}
        setMemo={setMemo}
        types={types}
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
  types: PropTypes.string,
  memo: PropTypes.bool,
  setMemo: PropTypes.func,
};

export default Input;
