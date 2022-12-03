import React, { useState } from "react";

import style from "../../styles/TermsCondition";
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

export default function TermsCondtion({ open, handleOpen }) {
  const user = useSelector((state) => state.user);
 
  return (
    <Box>
      <Modal
        open={open}
         onClose={handleOpen}
      >
        <Box sx={style.boxModal}>
          <Box sx={style.modalContainer}>
            <Box sx={style.headerModal}>
              <ReceiptIcon sx={style.modalIcon} />
              <Typography sx={style.modalHeadText}>Terms and Conditions</Typography>
            </Box>

            <Typography >
            <b> PaSan: A Patnubay at Sanggunian Center</b> <br/><br/>
<b>Terms and Conditions </b> <br/>
Please read these terms and conditions that we created carefully before using PaSan: A Patnubay at Sanggunian Center website operated by us.

PaSan: A Patnubay at Sanggunian Center<br/><br/>
This website is created and intended to use exclusively by the Guidance counsellors and Students of Bulacan State University Bustos Campus.

Conditions of use<br/><br/>
By using this website, you certify that you have read and reviewed this Agreement and that you agree to comply with its terms. If you do not want to be bound by the terms of this Agreement, you are advised to leave the website accordingly.
<br/>
<br/>
<b>Intellectual property</b><br/>
You agree that all materials and services provided on this website are the property of Bulacan State University Bustos-Campus Guidance Office including all copyrights, trade secrets, trademarks, patents, and other intellectual property. You also agree that you will not reproduce or redistribute the PaSan's intellectual property in any way, including electronic, digital, or new trademark registrations.
You grant PaSan a royalty-free and non-exclusive license to display, use, copy, and store all the information that is not confidential that you submitted in this website. For issues regarding intellectual property claims, you should contact the company in order to come to an agreement.
<br/>
<br/>

<b>User accounts</b><br/>
As a user of this website, you may be asked to register with us and provide private information. You are responsible for ensuring the accuracy of this information, and you are responsible for maintaining the safety and security of your identifying information. You are also responsible for all activities that occur under your account or password.
If you think there are any possible issues regarding the security of your account on the website, inform us immediately so we may address them accordingly.
We reserve all rights to terminate accounts, edit or remove information that does not comply to our terms at our sole discretion.
Applicable law
By visiting this website, you agree that the laws of the Bulacan State University Bustos-Campus, without regard to principles of conflict laws, will govern these terms and conditions, or any dispute of any sort that might come between PaSaN and you.
<br/>
<br/>

<b>Indemnification</b><br/>
You agree to indemnify PaSan and its affiliates and hold PaSan harmless against legal claims and demands that may arise from your use or misuse of our services. We reserve the right to select our own legal counsel.
<br/>
<br/>
<b>Limitation on liability</b><br/>
PaSan is not liable for any damages that may occur to you as a result of your misuse of our website.
PaSan reserves the right to edit, modify, and change this Agreement at any time. We shall let our users know of these changes through electronic mail. This Agreement is an understanding between PaSan Center and the user, and this supersedes and replaces all prior agreements regarding the use of this website.
            </Typography>
           

  

            {/* <Box sx={style.perItemModal}>
              <Button sx={style.logoutButton} onClick={() => handleOpen()}>
                Cancel
              </Button>
            </Box>

            <Box sx={style.perItemModal}>
              <Button sx={style.saveButton}
                disabled={ payload.type === "" || payload.date === "" || payload.message === "" }
                onClick={() => buttonAdd()}
              >Add</Button>
            </Box> */}

          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
