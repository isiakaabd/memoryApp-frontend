import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from '@mui/material';
import { makeStyles } from '@mui/styles';

const SplitButton = ({ color, element, btnColor, text }) => {
  const useStyles = makeStyles((theme) => ({
    button: {
      '&.MuiButtonGroup-root': {
        borderRadius: '0px',
        height: '5rem',
      },
      btn: {
        '&.MuiButton-root': {
          '&:hover': {
            background: color,
          },
        },
      },
    },
  }));
  const classes = useStyles();
  return (
    <ButtonGroup
      disableElevation
      color={btnColor}
      className={classes.button}
      fullWidth
      variant="contained"
    >
      <Button color={color} disableElevation variant="outlined" size="large" sx={{ flex: 1 }}>
        {element}
      </Button>

      <Button color={btnColor} variant="contained">
        {text}
      </Button>
    </ButtonGroup>
  );
};

export default SplitButton;

SplitButton.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  element: PropTypes.node.isRequired,
  btnColor: PropTypes.string.isRequired,
};
