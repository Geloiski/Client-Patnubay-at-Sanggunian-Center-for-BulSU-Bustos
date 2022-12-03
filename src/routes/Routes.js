import React, { useEffect, useState } from "react";
import {
  ThemeProvider,
  createTheme,
  Box,
  Snackbar,
  Alert,
  Modal,
} from "@mui/material";
import theme from "../utils/theme";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Loading from "../components/Loading";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Counseling from "../pages/Counseling";
import Assesment from "../pages/Assesment";
import Form from "../pages/Form";
import Profile from "../pages/Profile";
import Blog from "../pages/Blog";

import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";

//backend
import { onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { auth, db } from "../utils/firebase";
import { getTheme, getLang } from "../redux/actions/uiAction";
import {
  setDoc,
  serverTimestamp,
  updateDoc,
  doc,
  arrayUnion,
  addDoc,
  collection,
  where,
  query,
  onSnapshot,
  orderBy,
} from "firebase/firestore";

import {
  setMyData,
  setMotors,
  setUsers,
  setProducts,
  setNewsBlogs,
  setOrders,
  setFinance,
  setHistory,
  setForms,
  setAppointment,
  setNews,
  setFormsFeedback,
  setChats,
  setThemes,
} from "../redux/actions/userAction";

import ChatButton from "../components/ChatButton";
import Chat from "../components/modal/chats";
import ForgotPassword from "../pages/ForgotPassword";

export default function Routes() {
  const ui = useSelector((state) => state.ui);
  const THEME = createTheme(theme(ui.isDarkMode));

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  // const location = useLocation();

  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => {
    setOpenModal(!openModal);
  };

  const [state, setstate] = useState({
    isAuth: false,
    isLoading: true,
  });

  //snackbar
  const [stateSnap, setStateSnap] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setStateSnap({ ...stateSnap, open: false });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // console.log(user.uid);

      if (user && user.emailVerified) {
        const collectionRefMyData = collection(db, "Users");
        const MyData = query(
          collectionRefMyData,
          where("UserUid", "==", user.uid)
        );

        dispatch(setMyData([{ UserType: "" }]));
        onSnapshot(MyData, async (snapshot) => {
          if (
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[0]
              .UserType === "Student"
          ) {
          
            dispatch(
              setMyData(
                snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
              )
            );

            setstate({ isAuth: true, isLoading: false });
          } else {
            setstate({ isAuth: false, isLoading: false });
            auth.signOut();
            // alert("Your Account is not Admin");
            console.log("Your Account is not Student");
            setStateSnap({ open: true });
          }
        });

        // users
        const collectionRefUsers = collection(db, "Users");
        const qUsers = query(collectionRefUsers, orderBy("Created"));
        onSnapshot(qUsers, (snapshot) =>
          dispatch(
            setUsers(
              snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            )
          )
        );

        // users
        const collectionRefForms = collection(db, "Forms");
        const qForms = query(collectionRefForms, orderBy("Created"));
        onSnapshot(qForms, (snapshot) =>
          dispatch(
            setForms(
              snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            )
          )
        );

        // news and blogs
        const collectionRefNewsBlogs = collection(db, "NewsBlogs");
        const qNewsBlogs = query(collectionRefNewsBlogs, orderBy("Created"));
        onSnapshot(qNewsBlogs, (snapshot) =>
          dispatch(
            setNews(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
          )
        );

        // History
        const collectionRefHistory = collection(db, "History");
        const qHistory = query(collectionRefHistory, orderBy("Created"));
        onSnapshot(qHistory, (snapshot) =>
          dispatch(
            setHistory(
              snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            )
          )
        );

        // Appointment
        const collectionRefAppointment = collection(db, "Appointment");
        const qAppointment = query(
          collectionRefAppointment,
          orderBy("Created")
        );
        onSnapshot(qAppointment, (snapshot) =>
          dispatch(
            setAppointment(
              snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            )
          )
        );

         // Forms Feedback
         const collectionRefFeedback= collection(db, "FormsFeedback");
         const qFeedback = query(collectionRefFeedback, orderBy("Created"));
         onSnapshot(qFeedback, (snapshot) =>
           dispatch(
             setFormsFeedback(
               snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
             )
           )
         );
         
          // Chats
          const collectionRefChat = collection(db, "Chats");
          const qChat = query(
            collectionRefChat
          );
          onSnapshot(qChat, (snapshot) =>
            dispatch(
              setChats(
                snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
              )
            )
          );

           // Theme Data
           const collectionRefThemes = collection(db, "Theme");
           const qThemes = query(
            collectionRefThemes
           );
           onSnapshot(qThemes, (snapshot) =>
             dispatch(
               setThemes(
                 snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
               )
             )
           );
          
      } else {
        setstate({ isAuth: false, isLoading: false });

      }
    });

    dispatch(getLang(), getTheme());
  }, [dispatch]);

  if (state.isLoading) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={THEME}>
      <Snackbar
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={stateSnap.open}
        key={stateSnap.vertical + stateSnap.horizontal}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Your Account is not Student
        </Alert>
      </Snackbar>

  <Chat open={openModal} handleClose={handleCloseModal} /> 
  {/* <ChatButton handleCloseModal={handleCloseModal}/> */}

      <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/login" />
          </Route>

          <PublicRoute
            restricted={true}
            component={Login}
            isAuth={state.isAuth}
            path="/login"
            exact
          />

          <PublicRoute
            restricted={true}
            component={Register}
            isAuth={state.isAuth}
            path="/register"
            exact
          />

        <PublicRoute
            restricted={true}
            component={ForgotPassword}
            isAuth={state.isAuth}
            path="/forgot-password"
            exact
          />

          <PrivateRoute
            component={Home}
            handleCloseModal={handleCloseModal}
            isAuth={state.isAuth}
            path="/home"
            exact
          />

          <PrivateRoute
            component={Counseling}
            handleCloseModal={handleCloseModal}
            isAuth={state.isAuth}
            path="/counseling"
            exact
          />

          <PrivateRoute
            component={Assesment}
            handleCloseModal={handleCloseModal}
            isAuth={state.isAuth}
            path="/assesment"
            exact
          />

          <PrivateRoute
            component={Form}
            handleCloseModal={handleCloseModal}
            isAuth={state.isAuth}
            path="/form"
            exact
          />

          <PrivateRoute
            component={Profile}
            handleCloseModal={handleCloseModal}
            isAuth={state.isAuth}
            path="/profile"
            exact
          />

        <PrivateRoute
            component={Blog}
            handleCloseModal={handleCloseModal}
            isAuth={state.isAuth}
            path="/blog"
            exact
          />

        </Switch>
      </Router>
    </ThemeProvider>
  );
}
