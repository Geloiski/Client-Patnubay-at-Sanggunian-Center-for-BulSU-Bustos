import React, { useState } from "react";

import style from "../../styles/AddAppoinment";
import {
  Box,
  Modal,
  TextField,
  Typography,
  Button,
  Divider,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";

// Import Icon
import ReceiptIcon from "@mui/icons-material/Receipt";
//redux
import { useSelector } from "react-redux";

//firebase
import { db, auth } from "../../utils/firebase";
import {
  serverTimestamp,
  addDoc,
  collection

} from "firebase/firestore";

import { DateTimePicker } from "@mui/lab";

import DateAdapter from "@mui/lab/AdapterDayjs";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import dayjs from "dayjs";

export default function AddAppointment({ open, handleClose }) {
  const user = useSelector((state) => state.user);
  // const [tracking, setTracking] = useState( user.orders.filter((order) => order.id === id)[0].JntTracking);

  const buttonAdd = async () => {

    const scheduleDate = new Date(payload.date);
    console.log(scheduleDate);

    await addDoc(collection(db, "Appointment"), {
      Title: `${payload.type} Appointment`,
      Type: payload.type,
      Description: "",
      Message: payload.message,
      AdminMessage: "",
      UserType: user.currentUserData[0].UserType,
      Date: scheduleDate,
      Status: "Pending",
      StudentUser: auth.currentUser.uid,
      CreatedUser: auth.currentUser.uid,
      Created: serverTimestamp(),
    });

    await addDoc(collection(db, "History"), {
      Title: `Created Counseling ${payload.type + "Appointment"} Record`,
      CreatedUser: auth.currentUser.uid,
      StudentUser: auth.currentUser.uid,
      Created: serverTimestamp(),
    });
  
  };

  const [payload, setPayload] = useState({
    message: "",
    type: "",
    date: "",
  });

  const handleChange = (props) => (event) => {
    setPayload({ ...payload, [props]: event.target.value });
  };
// console.log(payload.date);
// console.log(payload.date.toString() + "+8");

  return (
    <Box>
      <Modal
        open={open}
        // onClose={handleClose}
      >
        <Box sx={style.boxModal}>
          <Box sx={style.modalContainer}>
            <Box sx={style.headerModal}>
              <ReceiptIcon sx={style.modalIcon} />
              <Typography sx={style.modalHeadText}>Add Appointment</Typography>
            </Box>

           

              <Box gridColumn="span 6" sx={{ my: 2 }}>
                <LocalizationProvider dateAdapter={DateAdapter}>
                  <DateTimePicker
                    format="MM/dd/yyy"
                    label="Schedule Date and Time"
                    value={payload.date}
                    onChange={(value) => setPayload({"date": value})}
                    renderInput={(params) => (
                      <TextField fullWidth {...params} />
                    )}
                    minDate={dayjs()}
                  />
                </LocalizationProvider>
              </Box>

              <Box gridColumn="span 6" sx={{ my: 2 }}>
                <FormControl fullWidth sx={style.textBoxModal}>
                  <InputLabel>Counseling Type</InputLabel>
                  <Select
                    label="Counseling Type"
                    value={payload.type}
                    onChange={handleChange("type")}
                  >
                    <MenuItem value={"Face to Face"}>Face to Face</MenuItem>
                    <MenuItem value={"Virtual"}>Virtual</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Box gridColumn="span 6" sx={{ mb: 2 }}>
                <TextField
                  fullWidth
                  id="outlined-multiline-static"
                  multiline
                  rows={4}
                  label="Message"
                  defaultValue={payload.message}
                  onChange={handleChange("message")}
                />
              </Box>

              <Divider sx={{ my: 1 }} />
  

            <Box sx={style.perItemModal}>
              <Button sx={style.logoutButton} onClick={() => handleClose()}>
                Cancel
              </Button>
            </Box>

            <Box sx={style.perItemModal}>
              <Button sx={style.saveButton}
                disabled={ payload.type === "" || payload.date === "" || payload.message === "" }
                onClick={() => buttonAdd()}
              >Add</Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
