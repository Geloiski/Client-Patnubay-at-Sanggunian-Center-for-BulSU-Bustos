import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";
// Importing Styling
import style from "../styles/Login";
import "../styles/Universal.css";

// Import Material UIs
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  TextField,
  Stack,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
// Import Icon
//backend
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../utils/firebase";

// Import Image
import bsu from "../assets/images/logo2.jpg";
import logo from "../image/logo.png";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const emailFormat =
    /^([\w.-]+)@(\[(\d{1,3}\.){3}|(?=bulsu.edu.ph)(([a-zA-Z\d-]+\.)+))([a-zA-Z]{2,4}|\d{1,3})(\]?)$/;
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Bulsu Email is required")
      .matches(emailFormat, "Bulsu Email is required"),

    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      console.log(formik.values.email);
      signInWithEmailAndPassword(
        auth,
        formik.values.email,
        formik.values.password
      )
        .then(async (userCredential) => {
          const user = userCredential.user;
          const emailVerified = user.emailVerified;

          if (emailVerified === true) {
          } else {
            auth.signOut();
            alert("Your Email is not verified");
            setSubmitting(false);
          }

          // Signed in

          // ...
        })
        .catch((error) => {
          // error code
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorCode, errorMessage);
          setSubmitting(false);
        });
    },
  });

  const {
    errors,
    touched,
    values,
    isSubmitting,
    handleSubmit,
    getFieldProps,
    setSubmitting,
  } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };
  return (
    <div>
      {/* Main Container - START*/}
      <Box
        sx={{
          bgcolor: "#F3F3F3",
          width: "100%",
          backgroundImage: `url(${bsu})`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",

        }}
      >
        <Box sx={style.mainContainer}>
          <Box sx={style.loginContainer}>
            <Box sx={style.loginHeader}>
              <Box sx={style.logoContainer}>
                <img
                  alt=""
                  src={logo}
                  style={{
                    width: "70px",
                    height: "70px",
                    objectFit: "contained",
                  }}
                />
              </Box>
              <Box sx={style.titleContainer}>
                <Typography sx={style.titleText}>
                  PaSan: Patnubay at <br /> Sangunihan Center
                </Typography>
              </Box>
            </Box>

            <Box sx={style.welcomeContainer}>
              <Typography sx={style.loginTextBig}>Login</Typography>
              <Typography sx={style.loginSubTitle}>
                Enter your email to get sign in <br /> to your account
              </Typography>
            </Box>

            <Box sx={style.loginInputContainer}>
              <FormikProvider value={formik}>
                <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                  <Stack spacing={1}>
                    <Box sx={style.labelPlusTextbox}>
                      <Typography sx={style.loginLabel}>Email Address</Typography>

                      <TextField
                        sx={style.emailTextBox}
                        fullWidth
                        autoComplete="username"
                        type="email"
                        // label="Email address"
                        {...getFieldProps("email")}
                        error={Boolean(touched.email && errors.email)}
                        helperText={touched.email && errors.email}
                      />
                    </Box>

                    <Box sx={style.labelPlusTextbox}>
                      <Typography sx={style.loginLabel}>Password</Typography>
                      <TextField
                        sx={style.emailTextBox}
                        fullWidth
                        autoComplete="current-password"
                        type={showPassword ? "text" : "password"}
                        {...getFieldProps("password")}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton onClick={handleShowPassword} edge="end">
                                {showPassword ? (
                                  <VisibilityRoundedIcon sx={{ fontSize: 30 }} />
                                ) : (
                                  <VisibilityOffRoundedIcon sx={{ fontSize: 30 }} />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        error={Boolean(touched.password && errors.password)}
                        helperText={touched.password && errors.password}
                      />
                    </Box>

                    <Box>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox sx={style.rememberMe} />}
                          label="Remember Me"
                          sx={style.formLabel}
                        />
                      </FormGroup>
                    </Box>

                    <Box>
                      <LoadingButton
                        fullWidth
                        variant="contained"
                        sx={style.loginButton}
                        type="submit"
                        loading={isSubmitting}
                      >
                        Login
                      </LoadingButton>
                    </Box>
                  </Stack>
                </Form>
              </FormikProvider>

              <Box sx={style.container}>
                <Typography sx={style.linkText}>
                  Forgot Password?{" "}
                  <Link to="/forgot-password" style={{ textDecoration: "none" }}>
                    Click Here
                  </Link>{" "}
                  to reset your password.
                </Typography>
              </Box>

              <Box sx={style.container}>
                <Typography sx={style.linkText}>
                  Don't have an account yet? <br />{" "}
                  <Link to="/register" style={{ textDecoration: "none" }}>
                    Create an account
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Main Container - END*/}
    </div>
  );
};

export default Login;
