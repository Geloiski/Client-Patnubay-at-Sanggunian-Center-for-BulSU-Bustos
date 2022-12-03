import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// Import Styling
import style from "../styles/Counseling";

// Import Components
import NavUser from "../components/NavUser";
import SwipeUp from "../components/SwipeUp";
import ChatButton from "../components/ChatButton";
import FooterUser from "../components/FooterUser";

import AddAppointment from "../components/modal/AddAppointment";
// Import Material UIs
import {
  Box,
  Grid,
  Typography,
  Link,
  Collapse,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Paper,
  FormControl,
  Select,
  MenuItem,
  Divider,
} from "@mui/material";

// Import Material Icon
import PrintIcon from "@mui/icons-material/Print";
import { useSelector } from "react-redux";
//date fns
import { format, compareAsc } from "date-fns";

//firebase
import { db } from "../utils/firebase";
import {
  doc,
  updateDoc,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

function Counseling({ handleCloseModal }) {
  const user = useSelector((state) => state.user);
  const APPLIST = user.appointments.filter(
    (appointment) => appointment.CreatedUser === user.currentUserData[0].id
  );
  // Show Appointment Details Status - Pending
  const [openStatDetails, setOpenStatDetails] = useState(false);
  const handleClick = () => {
    setOpenStatDetails(!openStatDetails);
  };

  // Show Appoingment Details Status - Confirmed
  const [openConfirm, setOpenConfirm] = useState(false);
  const handleConfirm = () => {
    setOpenConfirm(!openConfirm);
  };

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(!open);
  };

  const cancelSchedule = async (id) => {
    // const dateSchedule = new Date(payload.Date);

    await updateDoc(doc(db, "Appointment", id), {
      //   Date: dateSchedule,
      //   Title: "",
      Message: "",
      //   StudentUser: "",
      Status: "Cancel By Student",
    });
  };

  const confirmSchedule = async (id) => {
    await updateDoc(doc(db, "Appointment", id), {
      //   Date: dateSchedule,
      //   Title: "",
      // Message: "",
      //   StudentUser: "",
      Status: "Confirmed",
    });
  }

  const isValidUrl = (urlString) => {
    var urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // validate protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
      "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // validate fragment locator
    return !!urlPattern.test(urlString);
  };

  // For Sorting
  const [sortInfo, setSortInfo] = useState(0);
  const handleSort = (event) => {
    setSortInfo(event.target.value);
  };

  useEffect(() => {
    if (sortInfo === 0) {
      APPLIST.sort((a, b) => (a.Date - b.Date));
    } else if (sortInfo === 1) {
      APPLIST.sort((a, b) => (b.Date - a.Date));
    }
  }, [sortInfo])


  return (
    <div>
      <Box>
        {/* Navbar Here */}
        <NavUser />

        {/* Modal Here */}

        <AddAppointment open={open} handleClose={handleClose} />

        {/* Main Container */}
        <Box sx={style.mainContainer}>
          {/* Center Container */}
          <Box sx={style.centerContainer}>
            {/* Main Grid */}
            <Grid container spacing={1}>
              {/* Appointment Grid */}
              <Grid item xs={12} md={3}>
                <Box sx={style.appointmentBox}>
                  <Box sx={style.appointmentTitle}>
                    <Typography sx={style.appointmentTitleText}>
                      My Appointment
                    </Typography>
                  </Box>

                  {/* Per Content */}
                  {APPLIST.filter(
                    (appointment, k) =>
                      appointment.Status === "Pending" ||
                      appointment.Status === "Accepted" || 
                      appointment.Status === "Follow Up" || 
                      appointment.Status === "Confirmed" 
                  ).map((appointment, k) => (
                    <Box sx={style.appointmentPerContainer} key={k}>
                      <Box sx={style.perAppointment}>
                        <Box
                          sx={
                            appointment.Status === "Cancel By Student" ||
                              appointment.Status === "Cancel By Admin" ||
                              appointment.Status === "Pending"
                              ? style.statusBox
                              : appointment.Status === "Accepted" ||
                                appointment.Status === "Done" || appointment.Status === "Confirmed"  ? style.statusBoxConfirmed
                                : appointment.Status === "Follow Up" ? style.statusBoxFollowUp : 
                                appointment.Status === "Failed to Attend" ? style.statusBoxFailedToAttend : ""
                          }
                        >
                          <Typography sx={style.statusConfirmed}>
                            {appointment.Status}
                          </Typography>
                          {/* <Typography sx={style.statusConfirmed}>CONFIRMED</Typography> */}
                        </Box>

                        <Typography sx={style.appointmentTimeDate}>
                          {format(
                            new Date(appointment.Date.seconds * 1000),
                            "PP"
                          )}
                        </Typography>
                        <Typography sx={style.appointmentTimeDate}>
                          {format(
                            new Date(appointment.Date.seconds * 1000),
                            "pp"
                          )}
                        </Typography>
                        <Collapse
                          in={openStatDetails}
                          timeout="auto"
                          unmountOnExit
                        >
                          <Box sx={style.hideContainer}>
                            <Typography sx={style.hideTitle}>
                              Counseling Type:
                            </Typography>
                            <Typography sx={style.hideDetails}>
                              {appointment.Type}
                            </Typography>

                            <Typography sx={style.hideTitle}>
                              Number of Session{"(s)"}:
                            </Typography>
                            <Typography sx={style.hideDetails}>
                              1 Session{"(s)"}
                            </Typography>

                            <Typography sx={style.hideTitle}>
                              Counselor Message:
                            </Typography>
                            <Typography sx={{ fontSize: 11, mb: 2 }}>
                              <a
                                href={appointment.AdminMessage}
                                target="_blank"
                              >
                                {appointment.AdminMessage}
                              </a>
                            </Typography>
                            {
                              appointment.Status === "Follow Up" ?
                                <Button
                                  sx={style.confirmedButton}
                                  variant="contained"
                                  onClick={() => confirmSchedule(appointment.id)}
                                >
                                  Confirm Request
                                </Button> : ""
                            }
                            <Button
                              disabled={
                                appointment.Status === "Accepted" ||
                                appointment.Status === "Done" ||
                                appointment.Status === "Cancel By Admin" ||
                                appointment.Status === "Cancel By Student" 
                                || appointment.Status === "Confirmed"
                              }
                              sx={style.cancelButton}
                              variant="contained"
                              onClick={() => cancelSchedule(appointment.id)}
                            >
                              Cancel Request
                            </Button>
                          </Box>
                        </Collapse>
                        <Link
                          onClick={handleClick}
                          sx={{
                            textDecoration: "none",
                            cursor: "pointer",
                            mt: "5px",
                          }}
                        >
                          {openStatDetails ? (
                            <Typography sx={style.moreLink}>
                              View Less
                            </Typography>
                          ) : (
                            <Typography sx={style.moreLink}>
                              View More
                            </Typography>
                          )}
                        </Link>
                      </Box>
                    </Box>
                  ))}

                  {/* Note Text */}
                  <Typography sx={style.noteText}>
                    NOTE: You cannot cancel the Appointment once Accepted.
                  </Typography>

                  {/* Button Crete Appointment */}
                  <Box>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={style.addButton}
                      onClick={handleClose}
                    >
                      Add Appointment
                    </Button>
                  </Box>
                </Box>
              </Grid>

              {/* Records Grid */}
              <Grid item xs={12} md={9}>
                <Box sx={style.recordBox}>
                  {/* Title */}
                  <Box>
                    <Typography sx={style.recordTitleText}>
                      Counseling Records
                    </Typography>
                    <Typography sx={style.recordText}>
                      We ensure all to protect the private nature of your
                      personal information. Please keep the record(s)
                      confidential.
                    </Typography>
                  </Box>

                  <Box sx={style.messageMainContainer}>
                    <Box sx={style.messageBorder}>
                      <Box>
                        <Typography sx={style.recordTitleText}>
                          Message
                        </Typography>
                      </Box>
                      {APPLIST.length === 0 && (
                        <Box>
                          <Typography sx={style.messageText}>
                            No Message{"(s)"}
                          </Typography>
                        </Box>
                      )}
                      {APPLIST.map((appointment, k) => (
                        <>
                          {k === -1 ? (
                            <Box>
                              <Typography sx={style.messageText}>
                                No Message{"(s)"}
                              </Typography>
                            </Box>
                          ) : (
                            <>
                              <Box >
                                <Box sx={{ display: "flex" }}>
                                  <Typography sx={style.messageText}>
                                    {appointment.Type}
                                  </Typography>
                                  <Box sx={{ flexGrow: 1 }} />
                                  <Typography sx={style.messageText}>
                                    {" "}
                                    {format(
                                      new Date(appointment.Date.seconds * 1000),
                                      "PPpp"
                                    )}
                                  </Typography>
                                </Box>
                                <Typography sx={style.messageText}>
                                  <b>{appointment.AdminMessage}</b>
                                </Typography>

                              </Box>
                              <Divider sx={{ mt: 2, mb: 2 }} />
                            </>

                          )}
                        </>
                      ))}
                    </Box>
                  </Box>

                  {/* Table */}
                  <Box sx={style.myRecordsBox}>
                    <Box sx={style.recordTitle}>
                      <Typography sx={style.myRecordsText}>
                        My Records
                      </Typography>

                      {/* Student Records */}
                      <Box sx={{ mt: "10px" }}>
                        <Grid container>
                          <Grid item xs={12} md={6}>
                            <Box sx={style.recordInfoContainer}>
                              <Typography sx={style.infoIdentifier1}>
                                Student Number:
                              </Typography>
                              <Typography sx={style.infoText}>
                                {user.currentUserData[0].StudentNumber}
                              </Typography>
                            </Box>
                            <Box sx={style.recordInfoContainer}>
                              <Typography sx={style.infoIdentifier2}>
                                Student Name:
                              </Typography>
                              <Typography sx={style.infoText}>
                                {user.currentUserData[0].UserName}
                              </Typography>
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Box sx={style.recordInfoContainer}>
                              <Typography sx={style.infoIdentifier3}>
                                Program/Year {"& "} Section:
                              </Typography>
                              <Typography sx={style.infoText}>
                                {user.currentUserData[0].Section}
                              </Typography>
                            </Box>
                            {/* <Box sx={style.recordInfoContainer}>
                              <Typography sx={style.infoIdentifier4}>
                                Age:
                              </Typography>
                              <Typography sx={style.infoText}>25</Typography>
                            </Box> */}
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>

                    {/* Filter */}
                    <Box sx={style.filterMainContainer}>
                      <Box>
                        <Typography sx={style.sortLabel}>Sort By:</Typography>
                      </Box>
                      <Box>
                        <FormControl>
                          <Select
                            onChange={handleSort}
                            value={sortInfo}
                            sx={style.sortDrop}
                          >
                            <MenuItem value={0} sx={style.selectChoices}>
                              Date {"A-Z"}
                            </MenuItem>
                            <MenuItem value={1} sx={style.selectChoices}>
                              Date {"Z-A"}
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Box>

                    {/* Table */}
                    <Box sx={style.recordsInfo}>
                      <Box sx={style.tableContainer}>
                        <TableContainer
                          component={Paper}
                          sx={style.tablePaperContainer}
                        >
                          <Table sx={style.studentTable}>
                            {/* Table Row - Table Head */}
                            <TableHead sx={style.tableHead}>
                              <TableRow>
                                <TableCell sx={style.tableCell}>Date</TableCell>
                                <TableCell sx={style.tableCell}>Time</TableCell>
                                <TableCell sx={style.tableCell}>Type</TableCell>
                                <TableCell sx={style.tableCell}>
                                  Counselor
                                </TableCell>
                                <TableCell sx={style.tableCell}>
                                  Session
                                </TableCell>
                                <TableCell sx={style.tableCell}>
                                  Status
                                </TableCell>
                              </TableRow>
                            </TableHead>

                            {/* Table Content */}
                            {APPLIST.filter(
                              (appointment) =>
                                appointment.Status === "Done" ||
                                appointment.Status === "Cancel By Admin" ||
                                appointment.Status === "Cancel By Student" || 
                                appointment.Status === "Failed to Attend"
                            ).map((appointment, k) => (
                              <TableBody key={k}>
                                {/* Per Content */}
                                <TableRow>
                                  <TableCell
                                    sx={style.tableCellDetails}
                                    component="th"
                                    scope="row"
                                  >
                                    {format(
                                      new Date(appointment.Date.seconds * 1000),
                                      "PP"
                                    )}
                                  </TableCell>
                                  <TableCell
                                    sx={style.tableCellDetails}
                                    component="th"
                                    scope="row"
                                  >
                                    {format(
                                      new Date(appointment.Date.seconds * 1000),
                                      "pp"
                                    )}
                                  </TableCell>
                                  <TableCell
                                    sx={style.tableCellDetails}
                                    component="th"
                                    scope="row"
                                  >
                                    {appointment.Type}
                                  </TableCell>
                                  <TableCell
                                    sx={style.tableCellDetails}
                                    component="th"
                                    scope="row"
                                  >
                                    {user.users
                                      .filter(
                                        (user) =>
                                          user.id === appointment.Counselor
                                      )
                                      .map((user) => user.UserName)}
                                  </TableCell>
                                  <TableCell
                                    sx={style.tableCellDetails}
                                    component="th"
                                    scope="row"
                                  >
                                    1
                                  </TableCell>
                                  <TableCell
                                    sx={style.tableCellDetails}
                                    component="th"
                                    scope="row"
                                  >
                                    {appointment.Status}
                                  </TableCell>
                                </TableRow>
                              </TableBody>
                            ))}
                          </Table>
                        </TableContainer>
                      </Box>

                      {/* Print Button */}
                      {/* <Box sx={style.printContainer}>
                        <Button variant="contained" sx={style.buttonPrint}>
                          <PrintIcon sx={style.printIcon} />
                          Print
                        </Button>
                      </Box> */}
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>

        {/* Swipe up */}
        <SwipeUp />
        {/* Chat Button */}
        <ChatButton handleCloseModal={handleCloseModal} />
        <FooterUser />
      </Box>
    </div>
  );
}

export default Counseling;
