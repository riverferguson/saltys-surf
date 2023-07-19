import * as React from 'react';
import { useFormik } from 'formik'; 
import * as Yup from 'yup'; 
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useHistory } from 'react-router-dom';
import { useErrors } from '../context/errorContext';

const defaultTheme = createTheme();

function SignIn({ onSign }) {
  const history = useHistory();
  const { setError } = useErrors();

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('Username is required'),
    password: Yup.string()
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const userObj = { username: values.username, password: values.password };

      fetch('/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userObj),
      })
        .then((r) => {
          if (r.ok) {
            r.json().then((data) => onSign(data));
            history.push('/');
          } else {
            setError('Oops, something went wrong. Provide Valid Username and Password');
          }
        });
    },
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        {/* Side Image */}
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(data:image/jpeg;base64,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)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Container} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.username && formik.errors.username}
                helperText={formik.touched.username && formik.errors.username}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && formik.errors.password}
                helperText={formik.touched.password && formik.errors.password}
              />
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link to="/signup" href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default SignIn;