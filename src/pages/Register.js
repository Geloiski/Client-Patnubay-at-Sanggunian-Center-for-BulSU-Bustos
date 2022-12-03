import React, { useState } from "react";

// Import Styling
import style from "../styles/Register";
import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";
// Import Material UIs
import {
  Container,
  Stack,
  Box,
  Link,
  Typography,
  Breadcrumbs,
  Paper,
  Grid,
  TextField,
  InputAdornment,
  IconButton,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  FormHelperText,
  CircularProgress,
  Snackbar,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Alert
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
// Import Image
import bsu from "../assets/images/logo2.jpg";
import logo from "../image/logo.png";
import AddAPhotoRoundedIcon from "@mui/icons-material/AddAPhotoRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";

import TermsCondtion from "../components/modal/TermsCondition";
//backend
import { db, storage } from "../utils/firebase";
import {
  setDoc,
  serverTimestamp,
  updateDoc,
  doc,
  arrayUnion,
  addDoc,
  collection,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { sendEmailVerification } from "firebase/auth";
import { getAuth } from "firebase/auth";

function Register() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [avatarError, setAvatarError] = useState(false);
  //yup and formik

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((show) => !show);
  };
  const phoneFormat =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const emailFormat =
    /^([\w.-]+)@(\[(\d{1,3}\.){3}|(?=bulsu.edu.ph)(([a-zA-Z\d-]+\.)+))([a-zA-Z]{2,4}|\d{1,3})(\]?)$/;
  
    const LoginSchema = Yup.object().shape({
   
    email: Yup.string()
    .matches(emailFormat, "Bulsu Email is required")
    .email("Email must be a valid email address")
    .required("Email is required"),

    password: Yup.string()
      .min(7, "Be at least 8 characters in length")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .when("password", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Both password need to be the same"
        ),
      })
      .required("Confirm Password is required"),



    firstName: Yup.string().min(2, "First Name is invalid").required("Given Name is required"),
    lastName: Yup.string().min(2, "Last Name is invalid").required("Last Name is required"),
    yearLevel: Yup.string().min(2, "Year Level is invalid").required("Year Level is required"),
    section: Yup.string().min(1, "Section is invalid").required("Section is required"),
    studentNumber: Yup.string().min(9, "Student Number is invalid").required("Student Number is required"),
    agree: Yup.boolean().oneOf([true], "You must agree to the terms and conditions"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      yearLevel: "",
      section: "",
      password: "",
      confirmPassword: "",
      // avatar: "",
      studentNumber: "",
      agree: false,
    },
    validationSchema: LoginSchema,
    onSubmit: async () => {
      console.log(formik.values.email);

      setLoading(true);

      const auth = getAuth();
    //   await addDoc(collection(db, "History"), {
    //     Title: `Created User ${formik.values.fullName} ${formik.values.role}`,
    //     CreatedUser: auth.currentUser.uid,
    //     Created: serverTimestamp(),
    //   });

    alert("Account Created");
      createUserWithEmailAndPassword(
        auth,
        formik.values.email,
        formik.values.password
      )
        .then((userCredential) => {
          sendEmailVerification(auth.currentUser).then(async () => {
            // Email verification sent!
            // alert("Email sent");
            // auth.signOut();
            // setLoading(false);
            //add data firestore and image

            await setDoc(doc(db, "Users", userCredential.user.uid), {
              UserUid: userCredential.user.uid,
              UserEmail: formik.values.email,
              ImageName: "",
              Image: "",
              UserName: formik.values.firstName+" "+formik.values.lastName,
              UserType: "Student",
              ContactNumber: Number(0),
              StudentNumber: formik.values.studentNumber,
              Section: `${formik.values.yearLevel} ${formik.values.section}`,
              Created: serverTimestamp(),
            });

            await addDoc(collection(db, "Chats", userCredential.user.uid,"Chat"), {
              from: "Admin",
              message: "Welcome to Bulsu PaSan",
              Created: serverTimestamp(),
            });

            await setDoc(doc(db, "Chats", userCredential.user.uid), {
              id: userCredential.user.uid,
            });

         
            resetForm({
              values: {
                fullName: "",
                phoneNumber: "",
                email: "",
                password: "",
                confirmPassword: "",
                role: "",
                studentNumber: "",
              },
            });
            setSnackbarOpen(true);
          });
        })
        .catch((error) => {
          // error
          setSubmitting(false);
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorCode, errorMessage);
          setLoading(false);
        });


    },
  });
  // console.log("files", files);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    errors,
    touched,
    // values,
    resetForm,
    isSubmitting,
    handleSubmit,
    getFieldProps,
    // setFieldValue,
    setSubmitting,
    // getFieldMeta,
  } = formik;

   //snapbar
   const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };

  const [ open, setOpen ] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      {/* Main Container - START */}

      <TermsCondtion open={open} handleOpen={handleOpen} />
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
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Crete Account Successfully
        </Alert>
      </Snackbar>
        <Box sx={style.registerContainer}>
          <Box sx={style.registerHeader}>
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
            <Typography sx={style.registerTitleBig}>Sign Up</Typography>
            <Typography sx={style.registerSubTitle}>
              Please fill up the form below.
            </Typography>
          </Box>

          <Box sx={style.registerInputContainer}>
            <FormikProvider value={formik}>
              <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                {/* Register Item */}
                <Box sx={style.registerMargin}>
                  <Grid container sx={style.textboxGrid}>
                    <Grid item xs={12} md={5.9}>
                      <Box sx={style.labelPlusTextbox}>
                        <Typography sx={style.registerLabel}>
                          Given Name
                        </Typography>
                        <TextField
                        sx={style.plainTextBox} 
                          fullWidth
                          type="name"
                          {...getFieldProps("firstName")}
                          error={Boolean(touched.firstName && errors.firstName)}
                          helperText={touched.firstName && errors.firstName}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={5.9}>
                    <Typography sx={style.registerLabel}>
                          Last Name
                        </Typography>
                      <Box sx={style.labelPlusTextbox}>
                      <TextField
                        sx={style.plainTextBox} 
                          fullWidth
                          type="name"
                          {...getFieldProps("lastName")}
                          error={Boolean(touched.lastName && errors.lastName)}
                          helperText={touched.lastName && errors.lastName}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>

                {/* Register Item */}
                <Box sx={style.registerMargin}>
                  <Grid container sx={style.textboxGrid}>
                    <Grid item xs={12} md={5.9}>
                      <Box sx={style.labelPlusTextbox}>
                        <Typography sx={style.registerLabel} >
                          Student Number
                        </Typography>
                        <TextField
                        sx={style.plainTextBox} 
                          fullWidth
                          placeholder="ex: 2019xxxxxx"
                          type="number"
                          {...getFieldProps("studentNumber")}
                          error={Boolean(
                            touched.studentNumber && errors.studentNumber
                          )}
                          helperText={
                            touched.studentNumber && errors.studentNumber
                          }
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={5.9}>
                      <Box sx={style.labelPlusTextbox}>
                        <Typography sx={style.registerLabel}>
                          Email Address
                        </Typography>
                        <TextField
                          sx={style.plainTextBox} 
                          fullWidth
                          autoComplete="username"
                          placeholder="ex: bulsumail@bulsu.edu.ph"
                          type="email"
                          {...getFieldProps("email")}
                          error={Boolean(touched.email && errors.email)}
                          helperText={touched.email && errors.email}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>

                {/* Register Item */}
                <Box sx={style.registerMargin}>
                  <Grid container sx={style.textboxGrid}>
                    <Grid item xs={12} md={5.9}>
                      <Box sx={style.labelPlusTextbox}>
                        <Typography sx={style.registerLabel}>
                        Course
                        </Typography>
                        <TextField
                        sx={style.plainTextBox} 
                          fullWidth
                          type="name"
                          placeholder="ex: BSIT"
                          {...getFieldProps("yearLevel")}
                          error={Boolean(touched.yearLevel && errors.yearLevel)}
                          helperText={touched.yearLevel && errors.yearLevel}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={5.9}>
                      <Box sx={style.labelPlusTextbox}>
                        <Typography sx={style.registerLabel}>
                          Year Section
                        </Typography>
                        <TextField
                        sx={style.plainTextBox} 
                          fullWidth
                          type="name"
                          placeholder="ex: 4B"
                          {...getFieldProps("section")}
                          error={Boolean(touched.section && errors.section)}
                          helperText={touched.section && errors.section}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>

                {/* Register Item */}
                <Box sx={style.registerMargin}>
                  <Grid container sx={style.textboxGrid}>
                    <Grid item xs={12} md={5.9}>
                      <Box sx={style.labelPlusTextbox}>
                        <Typography sx={style.registerLabel}>
                          Password
                        </Typography>
                        <TextField
                         sx={style.plainTextBox}
                          fullWidth
                          autoComplete="current-password"
                          type={showPassword ? "text" : "password"}
                          {...getFieldProps("password")}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  onClick={handleShowPassword}
                                  edge="end"
                                >
                                  {showPassword ? (
                                    <VisibilityRoundedIcon sx={{fontSize:30}}/>
                                  ) : (
                                    <VisibilityOffRoundedIcon sx={{fontSize:30}}/>
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                          error={Boolean(touched.password && errors.password)}
                          helperText={touched.password && errors.password}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={5.9}>
                      <Box sx={style.labelPlusTextbox}>
                        <Typography sx={style.registerLabel}>
                          Confirm Password
                        </Typography>
                        <TextField
                         sx={style.plainTextBox}
                          fullWidth
                          autoComplete="current-password"
                          type={showConfirmPassword ? "text" : "password"}
                          {...getFieldProps("confirmPassword")}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  onClick={handleShowConfirmPassword}
                                  edge="end"
                                >
                                  {showConfirmPassword ? (
                                    <VisibilityRoundedIcon sx={{fontSize:30}}/>
                                  ) : (
                                    <VisibilityOffRoundedIcon sx={{fontSize:30}}/>
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                          error={Boolean(
                            touched.confirmPassword && errors.confirmPassword
                          )}
                          helperText={
                            touched.confirmPassword && errors.confirmPassword
                          }
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>

                {/* Register Item */}
                <Box sx={style.registerMargin}>
                  <Grid container sx={style.textboxGrid}>
                    <Grid item xs={12} md={12}>
                      <Box sx={style.labelPlusCheckbox}>
                        <FormGroup >
                          <FormControlLabel
                            control={<Checkbox sx={style.rememberMe} 
                            {...getFieldProps("agree")}
                          error={Boolean(touched.agree && errors.agree)}
                          helperText={touched.agree && errors.agree} 
                            
                            />}
                            // label=""
                            sx={style.formLabel}
                              {...getFieldProps("agree")}
                            error={Boolean(touched.agree && errors.agree)}
                            // helperText={touched.agree && errors.agree} 
                          />
                        </FormGroup>
                        <FormHelperText sx={{color:"red", mr:2}}>{touched.agree && errors.agree}</FormHelperText>
                        <Typography sx={style.checkBoxText} onClick={handleOpen} >
                          I Agree to the Terms and Conditions
                        </Typography>
                      </Box>
                    </Grid>
                    {/* <Grid item xs={12} md={5.9}>
                                    <Box sx={style.labelPlusCheckbox}>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox sx={style.rememberMe} />}
                                                label=""
                                                sx={style.formLabel}
                                            />
                                        </FormGroup>
                                        <Typography sx={style.checkBoxText}>I Agree to the Terms of Service</Typography>
                                    </Box>
                                </Grid> */}
                  </Grid>

                  <Box sx={style.registerButtonContainer}>
                    <LoadingButton
                      fullWidth
                      variant="contained"
                      sx={style.signupButton}
                      type="submit"
                      loading={isSubmitting}
                    >
                      Sign Up
                    </LoadingButton>
                  </Box>
                </Box>
              </Form>
            </FormikProvider>
          </Box>
        </Box>
      </Box>
      </Box>
      {/* Main Container - END */}
    </div>
  );
}

export default Register;
