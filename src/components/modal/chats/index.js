import React, { useEffect, useLayoutEffect } from "react";
import { Link as RouterLink, useHistory, useLocation } from "react-router-dom";
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
  Avatar,

} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChatIcon from '@mui/icons-material/Chat';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import style from "../../../styles/AddAppoinment";

import ChatSidebar from "./ChatSidebar";
import ChatWindow from "./ChatWindow";
import ChatDetail from "./ChatDetail";
import { db, auth, storage } from "../../../utils/firebase";
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
  getDoc,
  Timestamp,
} from "firebase/firestore"; import User from "./User";
import { useState } from "react";
import Message from "./Message";
import MessageForm from "./MessageForm";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export default function Chats({ open, handleClose }) {
  const user = useSelector((state) => state.user);
  const history = useHistory();

  const [user1, setUser1] = useState(user.currentUserData[0].UserUid);
  const [users, setUsers] = useState([]);
  const [chat, setChat] = useState("");
  const [text, setText] = useState("");
  const [img, setImg] = useState("");
  const [msgs, setMsgs] = useState([]);

  const [bot, setBot] = React.useState(false);
  const handleBot = () => {
    setBot(true);
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

  // useEffect(() => {
  //   if(urlId === null){
  //   history.push(`/chat?id=${1}`);
  //   }
  // }, [urlId])

  console.log(urlId);

  useEffect(() => {
    const usersRef = collection(db, "Users");
    // create query object
    const q = query(usersRef, where("UserType", "==", "Counselor"));
    // execute query
    const unsub = onSnapshot(q, (querySnapshot) => {
      let users = [];
      querySnapshot.forEach((doc) => {
        users.push(doc.data());
      });
      setUsers(users);
    });
    return () => unsub();
  }, [user1]);


  const [data1, setData] = React.useState(["id"]);
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



  const selectUser = async (user) => {
    setChat(user);
    setBot(false);
    const user2 = user.UserUid
    const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;

    const msgsRef = collection(db, "Chats", id, "Chat");
    const q = query(msgsRef, orderBy("createdAt", "asc"));

    onSnapshot(q, (querySnapshot) => {
      let msgs = [];
      querySnapshot.forEach((doc) => {
        msgs.push(doc.data());
      });
      setMsgs(msgs);
    });

    // get last message b/w logged in user and selected user
    const docSnap = await getDoc(doc(db, "lastMsg", id));
    // if last message exists and message is from selected user
    if (docSnap.data() && docSnap.data().from !== user1) {
      // update last message doc, set unread to false
      await updateDoc(doc(db, "lastMsg", id), { unread: false });
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const user2 = chat.UserUid;

    const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;

    let url;
    if (img) {
      const imgRef = ref(
        storage,
        `images/${new Date().getTime()} - ${img.name}`
      );
      const snap = await uploadBytes(imgRef, img);
      const dlUrl = await getDownloadURL(ref(storage, snap.ref.fullPath));
      url = dlUrl;
    }

    await addDoc(collection(db, "Chats", id, "Chat"), {
      text,
      from: user1,
      to: user2,
      createdAt: Timestamp.fromDate(new Date()),
      media: url || "",
    });

    await setDoc(doc(db, "lastMsg", id), {
      text,
      from: user1,
      to: user2,
      createdAt: Timestamp.fromDate(new Date()),
      media: url || "",
      unread: true,
    });

    setText("");
    setImg("");
  };
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

            <Box sx={{ flexGrow: 1 }} />
            <DisabledByDefaultIcon sx={style.modalIcon} onClick={() => handleClose()} />
          </Box>
          {/* {auth.currentUser &&  */}
          <Grid container spacing={2}>
            <Grid item xs={3.5}>
              <div className="users_container">
                {users.map((user) => (
                  <User
                    key={user.UserUid}
                    user={user}
                    selectUser={selectUser}
                    user1={user1}
                    chat={chat}
                  />
                ))}
                <Paper >
                  <ChatSidebar urlId={urlId} data={data} handleBot={handleBot} />
                </Paper>
              </div>
            </Grid>
            <Grid item xs={8.5}>
              {bot === true ?
                <Paper >
                  <ChatWindow data={data} urlId={urlId} handleBot={handleBot} bot={bot} />
                </Paper> :
                <div className="messages_container">
                  {chat ? (
                    <>
                      <div className="messages_user">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          {
                            chat.Image !== "" ?
                              <Avatar src={chat.Image} alt='avatar' sx={{ border: '2px solid #2E8359', margin: 1, fontSize: 32, width: 80, height: 80 }} /> :
                              <Avatar alt='avatar' sx={{ backgroundColor: '#2E8359', margin: 1, fontSize: 32, width: 80, height: 80 }}>{chat.UserName.substring(0, 2).toUpperCase()}</Avatar>
                          }
                          <div>
                            <h2>{chat.UserName}</h2>
                          </div>
                          <div style={{ flexGrow: 1 }} />
                          <div style={{
                            textAlign: 'right'
                          }}>
                            <h3 style={{ fontWeight: 700 }}>{chat.UserType}</h3>
                          </div>
                        </div>
                      </div>
                      <div className="messages">
                        {msgs.length
                          ? msgs.map((msg, i) => (
                            <Message key={i} msg={msg} user1={user1} />
                          ))
                          : null}
                      </div>
                      <MessageForm
                        handleSubmit={handleSubmit}
                        text={text}
                        setText={setText}
                        setImg={setImg}
                        img={img}
                      />
                    </>
                  ) : (
                    <h3 className="no_conv">Select a user to start conversation</h3>
                  )}
                </div>
              }
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
