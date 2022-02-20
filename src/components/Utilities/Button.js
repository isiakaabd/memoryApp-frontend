import React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import Loader from 'components/Utilities/Loader';

const CustomButton = ({
  title,
  endIcon,
  width,
  height,
  borderRadius,
  textColor,
  path,
  color,
  state,
  // type: { background, hover, active, disabled },
  isSubmitting,
  ...rest
}) => {
  const useStyles = makeStyles((theme) => ({
    button: {
      '&.MuiButton-root': {
        width: '100%',
        borderRadius: borderRadius ? borderRadius : 30,
        height: height ? height : '5rem',
        display: 'flex',
        color: theme.palette.primary.mainBlue,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: state ? theme.palette.primary.mainBlue : null,
        color: state ? 'white' : theme.palette.primary.mainBlue,
        border: `1px solid ${theme.palette.primary.mainBlue}`,

        '&:hover': {
          backgroundColor: state ? 'white' : theme.palette.primary.mainBlue,
          color: state ? theme.palette.primary.mainBlue : 'white',
        },
      },
    },
  }));

  const classes = useStyles();

  return (
    <Button
      variant={state ? 'contained' : 'outlined'}
      LinkComponent={Link}
      to={path ? path : ''}
      type="submit"
      disableElevation
      endIcon={endIcon}
      className={classes.button}
      {...rest}
    >
      {!isSubmitting && title} {isSubmitting && <Loader size={35} color="info" />}
    </Button>
  );
};

CustomButton.defaultProps = {
  width: 'auto',
  textColor: '#fff',
};

CustomButton.propTypes = {
  endIcon: PropTypes.node,
  title: PropTypes.string.isRequired,
  type: PropTypes.object,
  textColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  borderRadius: PropTypes.string,
  state: PropTypes.bool,
  path: PropTypes.string,
  color: PropTypes.string,
  isSubmitting: PropTypes.bool,
};

export default CustomButton;
