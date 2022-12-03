import React from "react";
// Import Styling
import style from "../styles/Form";

// Import Components
import SwipeUp from "../components/SwipeUp";
import ChatButton from "../components/ChatButton";
import NavUser from "../components/NavUser";
// redux
import { useSelector } from "react-redux";
// Import Material UI
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import { Link, useLocation, useHistory } from "react-router-dom";
import { LoadingButton } from "@mui/lab";

//backend
import { db, storage, auth } from "../utils/firebase";
import {
  setDoc,
  serverTimestamp,
  updateDoc,
  doc,
  arrayUnion,
  addDoc,
  collection,
  deleteField,
} from "firebase/firestore";
function FormPage({handleCloseModal}) {
  const history = useHistory();
  const user = useSelector((state) => state.user);
  const [payload, setPayload] = React.useState([]);
  const useQuery = () => {  
    return new URLSearchParams(useLocation().search);
  };
  let queryy = useQuery();
  let urlId = queryy.get("id");

  React.useEffect(() => {
    user.forms.filter((form) => {
      if (form.id === urlId) {
        setPayload(form);
      }
    });
  }, [urlId]);

  const [value, setValue] = React.useState([]);

  const handleChange = (q, v, k) => {
    value.findIndex((item) => item.k === k) === -1
      ? setValue([...value, { k, formsQuestion: q, formsAnswer: v }])
      : setValue(
          value.map((item) =>
            item.k === k ? { k, formsQuestion: q, formsAnswer: v } : item
          )
        );
  };

  const handleSubmit = async (e) => {
    await addDoc(collection(db, "FormsFeedback"), {
      FormsId: urlId,
      Forms: value,
      UserUid: auth.currentUser.uid,
      Created: serverTimestamp(),
    });
    // history.push("/assesment");
  };
  console.log(user.formsFeedback.filter((item) => item.FormsId === urlId));
  console.log(
  user.formsFeedback
      .filter((item) => item.UserUid === auth.currentUser.uid)
      .map((item) => item.FormsId).some((item) => item === urlId)
      
      
  );

  const filterData = user.formsFeedback
  .filter((item) => item.UserUid === auth.currentUser.uid)
  return (
    <div>
      <Box>
        {/* Navbar Here */}
        <NavUser />

        {/* Main Container */}
        <Box>
          {/* Center Container */}
          <Box sx={style.centerContainer}>
            <Box sx={{ maxWidth: 700, height: 400 }}>
              <img
                src={payload.Image}
                alt={payload.Title}
                loading="lazy"
                height="100%"
                width="100%"
              />
            </Box>

            <Typography variant="h3" sx={{ my: 3 }}>
              {payload.Title}
            </Typography>

            {user.formsFeedback
              .filter((item) => item.UserUid === auth.currentUser.uid)
              .map((item) => item.FormsId).some((item) => item === urlId) ? (
              <Box>
                <Typography variant="h4" sx={{ color: "gray" }}>
                  You Already Answered This Assesment
                </Typography>

                {filterData
              .filter((item) => item.FormsId === urlId)
              .map((item) => item.Forms).map((item) => item.map((item) => (
                <Box sx={{mt:2}}>
                <Typography variant="h5" sx={{ color: "gray" }}>
                  Question: {item.formsQuestion} 
                </Typography>
                <Typography variant="h6" sx={{ color: "gray" }}>
                 Answer: {item.formsAnswer}
                </Typography>
                </Box>
              )))}


              
              
              </Box>
            ) : (
              <>
                {payload.Forms?.map((form, k) => (
                  <Box sx={style.perQuestion} key={k}>
                    {/* Question */}
                    <Box sx={style.questionContainer}>
                      <Typography sx={style.questionText}>
                        {form.formsQuestion}
                      </Typography>
                    </Box>

                    {/* Answer */}
                    <Box>
                      <FormControl>
                        <RadioGroup>
                          <FormControlLabel
                            value="Answer A"
                            control={
                              <Radio
                                sx={style.radioColor}
                                onClick={() =>
                                  handleChange(
                                    form.formsQuestion,
                                    form.formsOptionA,
                                    k
                                  )
                                }
                              />
                            }
                            label={
                              <Typography sx={style.formLabelText}>
                                {form.formsOptionA}
                              </Typography>
                            }
                          />
                          <FormControlLabel
                            value="Answer B"
                            control={
                              <Radio
                                sx={style.radioColor}
                                onClick={() =>
                                  handleChange(
                                    form.formsQuestion,
                                    form.formsOptionB,
                                    k
                                  )
                                }
                              />
                            }
                            label={
                              <Typography sx={style.formLabelText}>
                                {form.formsOptionB}
                              </Typography>
                            }
                          />
                          <FormControlLabel
                            value="Answer C"
                            control={
                              <Radio
                                sx={style.radioColor}
                                onClick={() =>
                                  handleChange(
                                    form.formsQuestion,
                                    form.formsOptionC,
                                    k
                                  )
                                }
                              />
                            }
                            label={
                              <Typography sx={style.formLabelText}>
                                {form.formsOptionC}
                              </Typography>
                            }
                          />
                          <FormControlLabel
                            value="Answer D"
                            control={
                              <Radio
                                sx={style.radioColor}
                                onClick={() =>
                                  handleChange(
                                    form.formsQuestion,
                                    form.formsOptionD,
                                    k
                                  )
                                }
                              />
                            }
                            label={
                              <Typography sx={style.formLabelText}>
                                {form.formsOptionD}
                              </Typography>
                            }
                          />
                        </RadioGroup>
                      </FormControl>
                    </Box>
                  </Box>
                ))}

                <LoadingButton
                  variant="contained"
                  disabled={value.length === payload.Forms?.length ? false : true}
                  onClick={handleSubmit}
                >
                  Submit
                </LoadingButton>
              </>
            )}
          </Box>
        </Box>

        {/* Swipe Up Here */}
        <SwipeUp />
        {/* Chat Here */}
        <ChatButton handleCloseModal={handleCloseModal}/>
      </Box>
    </div>
  );
}

export default FormPage;
