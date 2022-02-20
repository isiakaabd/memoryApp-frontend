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

const useStyles = makeStyles((theme) => ({
  parentGrid: {
    height: '100vh',
    padding: '2rem',
    justifyContent: 'center',
    overflow: 'hidden',
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
      border: `1px solid ${theme.palette.primary.mainBlue} !important`,
      height: '100%',
      width: '100%',
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
  const theme = useTheme();
  const [memo, setMemo] = useState(false);
  const classes = useStyles();
  const initialValues = {
    email: '',
    password: '',
    authType: 'normal',
  };
  const [state, setState] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  useLayoutEffect(() => {
    setState(isMobile);
  }, [isMobile]);

  const validationSchema = Yup.object({
    email: Yup.string().email('Enter a valid email').required('Email is required'),
    password: Yup.string().required('password is required'),
  });
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Grid container className={classes.parentGrid} direction="column" gap={3}>
      <Grid item>
        <Typography gutterBottom variant="h1" sx={{ textAlign: 'center' }}>
          REGISTER
        </Typography>
        <Typography gutterBottom variant="h5">
          Already have an Account? Login
        </Typography>
      </Grid>
      <Grid item container justifyContent="center" gap={4} alignItems="center">
        <Grid item xs={12} md={5} container className={classes.gridOrder}>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            validateOnChange={true}
          >
            {({ errors }) => {
              return (
                <Grid item container width="100%" direction="column">
                  <Form>
                    <Grid item container gap={3}>
                      <Grid item container gap={3}>
                        <Grid item container>
                          <FormikControl
                            control="input"
                            error={errors.email}
                            name="email"
                            label="Email"
                            setMemo={setMemo}
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
                        {!state ? (
                          <Grid item>
                            <FormikControl control="checkbox" label="Remember me" />
                          </Grid>
                        ) : null}
                        <Grid item className={classes.checkbox}>
                          <Typography gutterBottom variant="h5">
                            Forget Password or Email?
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid
                        item
                        container
                        alignItems="center"
                        // sx={{ justifyContent: 'space-between' }}
                        flexWrap="nowrap"
                        xs={12}
                      >
                        <Grid item container xs={4}>
                          <CustomButton title="Sign Up" state={state} />
                        </Grid>

                        {memo && state ? (
                          <>
                            <Grid item xs={3}>
                              <Typography variant="h5">OR</Typography>
                            </Grid>
                            <Grid item container xs="auto" height="100%">
                              <AvatarGroup
                                sx={{ gap: 2, height: '100%', justifyContent: 'flex-end' }}
                              >
                                <Avatar className={classes.Avatar}>
                                  <GoogleIcon color="error" />
                                </Avatar>
                                <Avatar className={classes.Avatar}>
                                  <GoogleIcon />
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
        {!memo || !state ? (
          <Divider variant="middle" orientation="vertical" className={classes.divider} flexItem />
        ) : memo && state ? null : (
          <Grid item container alignItems="flex-end">
            <Divider style={{ width: '100%' }} orientation="horizontal">
              or use your email
            </Divider>
          </Grid>
        )}

        {!memo || !state ? (
          <Grid item container gap={1} xs={12} md={4} className={classes.order} alignItems="center">
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
