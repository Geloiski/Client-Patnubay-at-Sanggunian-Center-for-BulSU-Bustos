import React, { useEffect, useLayoutEffect } from "react";
import { Link as RouterLink,useHistory, useLocation } from "react-router-dom";
import {
  Container,
  Grid,
  Stack,
  Box,
  Typography,
  Link,
  Breadcrumbs,
  Paper,
  Modal,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,

} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChatIcon from '@mui/icons-material/Chat';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import style from "../../../styles/AddAppoinment";

import ChatSidebar from "./ChatSidebar";
import ChatWindow from "./ChatWindow";
import ChatDetail from "./ChatDetail";
import { db, auth } from "../../../utils/firebase";
import { useSelector } from "react-redux";

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
} from "firebase/firestore";;

export default function Chats({ open, handleClose }) {
  const user = useSelector((state) => state.user);
  console.log(user.chats);
  const history = useHistory();

const [bot, setBot] = React.useState(false);
const handleBot = () => {
  setBot(!bot);
};

//   useEffect(() => {

//     const querySnapshot = getDocs(collection(db, "Chats"));
//     querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     console.log(doc.id, " => ", doc.data());
// });

    
//   }, [])
  
// const useQuery = () => {
//   return new URLSearchParams(useLocation().search);
// };
// let queryy = useQuery();
// let urlId = queryy.get("id");

const [urlId, setUrlId] = React.useState(user.currentUserData[0].UserUid || "1");
const handleUrlId = (id) => {
  setUrlId(id);
}

  // useEffect(() => {
  //   if(urlId === null){
  //   history.push(`/chat?id=${1}`);
  //   }
  // }, [urlId])
  
  console.log(urlId);


  const [data1 , setData] = React.useState(["id"]);
  const data = data1.sort((a, b) => b.Created?.seconds - a.Created?.seconds);

  useEffect(() => {
 
     const collectionRefFinance = collection(db, "Chats", urlId, "Chat");
     const qFinance = query(collectionRefFinance, orderBy("Created", "asc"));
     onSnapshot(qFinance, (snapshot) =>
        setData(
           snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
         )
       
     );

  }, [urlId])

  console.log(data);
  return (
    <Modal
      open={open}
      sx={{ position: 'fixed', height: '100%', }}
      >
   
   <Box sx={style.boxModalChat}>
          <Box sx={style.modalContainer}>
            <Box sx={style.headerModal}>
              <ChatIcon sx={style.modalIcon} />
              <Typography sx={style.modalHeadText}>Chat</Typography>

              <Box sx={{flexGrow:1}}/>
              <DisabledByDefaultIcon sx={style.modalIcon} onClick={() => handleClose()} />
            </Box>
            
           {/* {auth.currentUser &&  */}
      <Grid container spacing={2}>
        <Grid item xs={3.5}>
          <Paper >
            <ChatSidebar urlId={urlId} data={data}  handleUrlId={handleUrlId} handleBot={handleBot}/>
          </Paper>
        </Grid>
        <Grid item xs={8.5}>
          <Paper >
            <ChatWindow data={data} urlId={urlId} handleBot={handleBot} bot={bot}/>
          </Paper>
        </Grid>
        {/* <Grid item xs={2}>
        <Paper >
            <ChatDetail urlId={urlId}/>
          </Paper>
        </Grid> */}
      </Grid>

    
      {/* } */}


</Box>
</Box>
    </Modal>
  );
}
