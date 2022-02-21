import React, { useState, useLayoutEffect } from 'react';
import { Grid, Typography, Divider, Avatar, AvatarGroup, useMediaQuery } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { FormikControl } from 'components/validation';
import { SplitButton, CustomButton } from 'components/Utilities';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import { register, login } from 'components/hooks/function';
import { useNavigate, useLocation } from 'react-router-dom';
import { useMutation } from 'react-query';
import useAuth from 'components/context/useAuth';

const useStyles = makeStyles((theme) => ({
  parentGrid: {
    height: '100vh',
    padding: '2rem',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  register: {
    '&.MuiTypography-root': {
      cursor: 'pointer',
      fontSize: '2rem',
      marginLeft: '.2rem',
      color: theme.palette.primary.mainBlue,
    },
  },
  divider: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '18rem',
    },
    '& .MuiDivider-wrapper': {
      fontSize: '18rem',
    },
  },
  Avatar: {
    '&.MuiAvatar-root': {
      background: 'white',
      border: `1px solid red !important`,
    },
  },
  secondAvatar: {
    '&.MuiAvatar-root': {
      border: `1px solid ${theme.palette.primary.mainBlue} !important`,
    },
  },
  checkbox: {
    [theme.breakpoints.down('sm')]: {
      order: 2,
    },
  },
  order: {
    [theme.breakpoints.down('sm')]: {
      order: -1,
    },
  },
  gridOrder: {
    [theme.breakpoints.down('sm')]: {
      order: 3,
    },
  },
}));
const SignUp = () => {
  const { setAuth } = useAuth();
  const theme = useTheme();
  const [memo, setMemo] = useState(false);
  const { mutateAsync, error } = useMutation(register);
  const { mutateAsync: loginMutation } = useMutation(login);
  const navigate = useNavigate();
  const location = useLocation();

  const classes = useStyles();
  const initialValues = {
    email: '',
    password: '',
  };
  const [state, setState] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  useLayoutEffect(() => {
    setState(isMobile);
  }, [isMobile]);
  const from = location?.state?.from.pathname || '/login';
  const validationSchema = Yup.object({
    email: Yup.string().email('Enter a valid email').required('Email is required'),
    password: Yup.string().required('password is required'),
  });
  const onSubmit = async (values, onSubmitProps) => {
    const { email, password } = values;
    const formData = {
      email,
      password,
    };
    try {
      if (types) await mutateAsync(formData);
      else {
        const { token, email, _id, refreshToken } = await loginMutation(formData);
        setAuth({
          token,
          email,
          id: _id,
          refreshToken,
        });

        navigate(from, { replace: true });
      }
    } catch (err) {
      console.error(error);
    } finally {
      onSubmitProps.resetForm();
    }
  };

  if (error) console.log(error);

  const [types, setTypes] = useState(false);
  return (
    <Grid container className={classes.parentGrid} direction="column" gap={3}>
      <Grid item>
        <Typography gutterBottom variant="h1">
          {types ? 'REGISTER' : 'Login'}
        </Typography>
        <Typography gutterBottom variant="h5" noWrap>
          {types ? 'Already' : "Don't"} have an Account?{' '}
          <Typography variant="span" onClick={() => setTypes(!types)} className={classes.register}>
            {types ? 'Login' : 'Register'}
          </Typography>
        </Typography>
      </Grid>
      <Grid item container justifyContent="center" gap={4} alignItems="center">
        <Grid item xs={12} md={4} container className={classes.gridOrder}>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            // validateOnChange={false}
            validateOnBlur
          >
            {({ errors, isSubmitting }) => {
              return (
                <Grid item container width="100%" direction="column">
                  <Form aria-autocomplete="off" autoComplete="off">
                    <Grid item container gap={3}>
                      <Grid item container gap={3}>
                        <Grid item container>
                          <FormikControl
                            control="input"
                            error={errors.email}
                            name="email"
                            label="Email"
                            memo={state}
                            setMemo={setMemo}
                            types="email"
                          />
                        </Grid>
                        {!state || memo ? (
                          <Grid item container md={12}>
                            <FormikControl
                              control="input"
                              error={errors.password}
                              name="password"
                              type="password"
                              label="Password"
                            />
                          </Grid>
                        ) : null}
                      </Grid>
                      <Grid
                        item
                        container
                        alignItems="center"
                        flexWrap="nowrap"
                        justifyContent="space-between"
                      >
                        {!state && !types ? (
                          <Grid item>
                            <FormikControl control="checkbox" label="Remember me" />
                          </Grid>
                        ) : null}
                        {!types ? (
                          <Grid item className={classes.checkbox}>
                            <Typography gutterBottom variant="h5">
                              Forget Password or Email?
                            </Typography>
                          </Grid>
                        ) : null}
                      </Grid>
                      <Grid
                        item
                        container
                        alignItems="center"
                        justifyContent="space-between"
                        flexWrap="nowrap"
                      >
                        <Grid item xs={4}>
                          <CustomButton
                            title={types ? 'Sign Up' : 'Login'}
                            isSubmitting={isSubmitting}
                            state={state}
                          />
                        </Grid>

                        {memo && state ? (
                          <>
                            <Grid item>
                              <Typography variant="h4">OR</Typography>
                            </Grid>
                            <Grid item xs={4}>
                              <AvatarGroup sx={{ height: '100%', justifyContent: 'space-between' }}>
                                <Avatar className={classes.Avatar}>
                                  <GoogleIcon color="error" />
                                </Avatar>
                                <Avatar className={`${classes.Avatar} ${classes.secondAvatar}`}>
                                  <FacebookTwoToneIcon color="info" />
                                </Avatar>
                              </AvatarGroup>
                            </Grid>
                          </>
                        ) : null}
                      </Grid>
                    </Grid>
                  </Form>
                </Grid>
              );
            }}
          </Formik>
        </Grid>
        {!state ? (
          <Divider variant="middle" orientation="vertical" className={classes.divider} flexItem />
        ) : memo && state ? null : (
          <Grid item container alignItems="flex-end">
            <Divider style={{ width: '100%' }} orientation="horizontal">
              or use your email
            </Divider>
          </Grid>
        )}

        {!memo || !state ? (
          <Grid item container gap={1} xs={12} md={3} className={classes.order} alignItems="center">
            <Grid item container gap={2}>
              <SplitButton
                color="error"
                btnColor="error"
                text="Continue with Google"
                element={<GoogleIcon sx={{ fontSize: 30 }} />}
              />
              <SplitButton
                btnColor="info"
                color="info"
                element={<FacebookTwoToneIcon sx={{ fontSize: 30 }} />}
                text="Continue with Facebook"
              />
            </Grid>
          </Grid>
        ) : null}
      </Grid>
    </Grid>
  );
};
export default SignUp;
