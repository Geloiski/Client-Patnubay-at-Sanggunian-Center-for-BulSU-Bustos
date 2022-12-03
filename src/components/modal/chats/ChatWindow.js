import React, { useEffect, useRef } from "react";
import { Link as RouterLink, useHistory, useLocation } from "react-router-dom";
import {
  Container,
  Avatar,
  Box,
  Typography,
  Paper,
  Divider,
  Grid,
  OutlinedInput,
  FormControl,
  IconButton,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SendIcon from "@mui/icons-material/Send";
import { useSelector } from "react-redux";
import style from "../../../styles/ChatButton1";
import { auth, db } from "../../../utils/firebase";
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

import { formatDistance, subDays } from "date-fns";

const AdminUi = {
  overflowWrap: "break-word",
  wordWrap: "break-word",
  hyphens: "auto",
  maxWidth: "500px",
  minWidth: { xs: 100, md: "400px" },
  p: 2,
  ml: 2,
  color: "gray",
  border: 1,
  borderTopLeftRadius: 10,
  borderTopRightRadius: 0,
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
};

const UserUi = {
  overflowWrap: "break-word",
  wordWrap: "break-word",
  hyphens: "auto",
  maxWidth: "500px",
  minWidth: { xs: 100, md: "400px" },
  p: 2,
  color: "gray",
  border: 1,
  ml: 2,
  borderTopLeftRadius: 0,
  borderTopRightRadius: 10,
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  bgcolor: "primary.main",
};

export default function ChatWindow({ data, urlId, handleBot, bot }) {
  const user = useSelector((state) => state.user);

  // const useQuery = () => {
  //   return new URLSearchParams(useLocation().search);
  // };
  // let queryy = useQuery();
  // let urlId = queryy.get("id");

  // const [data , setData] = React.useState([]);

  // useEffect(() => {

  //    const collectionRefFinance = collection(db, "Chats", urlId, "Chat");
  //    const qFinance = query(collectionRefFinance, orderBy("Created", "asc"));
  //    onSnapshot(qFinance, (snapshot) =>
  //       setData(
  //          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  //        )

  //    );

  // }, [urlId])

  const [m, setM] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const handleSendMessage = async (e) => {
    setM(true);
    setMessage("");
    console.log(message);
    await addDoc(collection(db, "Chats", urlId, "Chat"), {
      from: "Student",
      message: message,
      Created: serverTimestamp(),
    });
    setM(false);
  };

  const divRef = useRef(null);
  // const [msgs, setMsgs] = useState([]);

  // const scrollToBottom = () => {
  //   divRef.current.scrollIntoView({ behavior: "smooth" });
  // };

  // useEffect(() => {
  //   scrollToBottom();
  // }, [message]);

  return (
    <Box sx={{ width: "100%", height: "100%",  }}>
{bot === true ? (
  <Box sx={{  height: 400,
    overflow: "auto",
    display: "flex",
    flexDirection: "column-reverse",}}>
   <Box sx={style.faqModal}>

<Box sx={style.faqBox}>
    <Typography sx={style.faqText}>Frequently Ask Questions</Typography>
</Box>

{/* Registration */}
<Accordion sx={style.mainAccordion}>
    <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={style.expandIconMore} />}
    >
        <Typography sx={style.titleAccordion}>Registration</Typography>
    </AccordionSummary>
    <AccordionDetails>
        {/* Question 1 */}
        <Accordion sx={style.childAccordion}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={style.expandIconMore} />}
            >
                <Typography sx={style.questionAccordion}>Can I use a normal Gmail instead?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={style.answerText}>No. Only The Gmail with bulsu.edu.ph extension can be used in the website</Typography>
            </AccordionDetails>
        </Accordion>

        {/* Question 2 */}
        <Accordion sx={style.childAccordion}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={style.expandIconMore} />}
            >
                <Typography sx={style.questionAccordion}>Can I change my email address later?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={style.answerText}>No. Changing email address is prohibited for security purposes</Typography>
            </AccordionDetails>
        </Accordion>

        {/* Question 3 */}
        <Accordion sx={style.childAccordion}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={style.expandIconMore} />}
            >
                <Typography sx={style.questionAccordion}>Can I register even if I am a freshman?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={style.answerText}>yes! any year level can register and use the website as long as you have your bulsu mail and currently studying in BulSU.</Typography>
            </AccordionDetails>
        </Accordion>

        {/* Question 4 */}
        <Accordion sx={style.childAccordion}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={style.expandIconMore} />}
            >
                <Typography sx={style.questionAccordion}>Why I can’t access my account even I already sign up or register?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={style.answerText}>You still need to verify your account once you successfully created it by checking your bulsu mail, kindly check your inbox or spam.</Typography>
            </AccordionDetails>
        </Accordion>
    </AccordionDetails>
</Accordion>

{/* Account*/}
<Accordion sx={style.mainAccordion}>
    <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={style.expandIconMore} />}
    >
        <Typography sx={style.titleAccordion}>Account</Typography>
    </AccordionSummary>
    <AccordionDetails>
        {/* Question 1 */}
        <Accordion sx={style.childAccordion}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={style.expandIconMore} />}
            >
                <Typography sx={style.questionAccordion}>Can I change my personal info on the website?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={style.answerText}>Yes - kindly go to your student profile then you can now edit your personal info.</Typography>
            </AccordionDetails>
        </Accordion>

        {/* Question 2 */}
        <Accordion sx={style.childAccordion}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={style.expandIconMore} />}
            >
                <Typography sx={style.questionAccordion}>I forgot my password</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={style.answerText}>Click the "forgot password" and follow the instruction to reset your password</Typography>
            </AccordionDetails>
        </Accordion>

        {/* Question 3 */}
        <Accordion sx={style.childAccordion}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={style.expandIconMore} />}
            >
                <Typography sx={style.questionAccordion}>How can I change my password?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={style.answerText}>Just go to your student profile and you can now edit or change your password.</Typography>
            </AccordionDetails>
        </Accordion>


    </AccordionDetails>
</Accordion>

{/* Security*/}
<Accordion sx={style.mainAccordion}>
    <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={style.expandIconMore} />}
    >
        <Typography sx={style.titleAccordion}>Security</Typography>
    </AccordionSummary>
    <AccordionDetails>
        {/* Question 1 */}
        <Accordion sx={style.childAccordion}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={style.expandIconMore} />}
            >
                <Typography sx={style.questionAccordion}>Can I sign up without agreeing to the Terms and Condition?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={style.answerText}>No. You must read and understand our terms and condition before you use our website.</Typography>
            </AccordionDetails>
        </Accordion>

        {/* Question 2 */}
        <Accordion sx={style.childAccordion}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={style.expandIconMore} />}
            >
                <Typography sx={style.questionAccordion}>How do I ensure that my Personal Information is safe?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={style.answerText}>Your information is Safe with us. As stated in the “Data Privacy Act of 2012” (RA 10173), it is the State’s policy to protect the fundamental human right of privacy, of communication while ensuring free flow of information to promote innovation and growth. The State recognizes the vital role of information and communications technology in nation-building and its inherent obligation to ensure that personal information in information and communications system in the government and in the private sector are secured and protected.</Typography>
            </AccordionDetails>
        </Accordion>

    </AccordionDetails>
</Accordion>

{/* ABout PASAN*/}
<Accordion sx={style.mainAccordion}>
    <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={style.expandIconMore} />}
    >
        <Typography sx={style.titleAccordion}>About PASAN</Typography>
    </AccordionSummary>
    <AccordionDetails>
        {/* Question 1 */}
        <Accordion sx={style.childAccordion}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={style.expandIconMore} />}
            >
                <Typography sx={style.questionAccordion}>Who can use PaSan Center Website?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={style.answerText}> PaSan Center is only Exclusive to the students of BulSU Bustos</Typography>
            </AccordionDetails>
        </Accordion>

        {/* Question 2 */}
        <Accordion sx={style.childAccordion}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={style.expandIconMore} />}
            >
                <Typography sx={style.questionAccordion}>Can I still use PaSan Center after I graduated?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={style.answerText}>Unfortunately No. Only the student who are currently studying can use it, the admin have the rights to delete or remove the accounts of the user.</Typography>
            </AccordionDetails>
        </Accordion>

        {/* Question 3 */}
        <Accordion sx={style.childAccordion}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={style.expandIconMore} />}
            >
                <Typography sx={style.questionAccordion}>Is PaSan Center the new Guidance Office?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={style.answerText}>No. It is simply a tool for the Guidance Office to make their task easier. Also, to extent the help for the students of BSU- Bustos Campus</Typography>
            </AccordionDetails>
        </Accordion>

        {/* Question 4 */}
        <Accordion sx={style.childAccordion}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={style.expandIconMore} />}
            >
                <Typography sx={style.questionAccordion}>Can I access the website on any devices?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={style.answerText}>Yes! As long as you have a browser installed and internet connection.</Typography>
            </AccordionDetails>
        </Accordion>



    </AccordionDetails>
</Accordion>

{/* Guidance FAQs*/}
<Accordion sx={style.mainAccordion}>
    <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={style.expandIconMore} />}
    >
        <Typography sx={style.titleAccordion}>Guidance FAQs</Typography>
    </AccordionSummary>
    <AccordionDetails>
        {/* Question 1 */}
        <Accordion sx={style.childAccordion}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={style.expandIconMore} />}
            >
                <Typography sx={style.questionAccordion}>Who are the guidance counselor/s?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={style.answerText}>Mr. Noel Vergel De Guzman</Typography>
            </AccordionDetails>
        </Accordion>

        {/* Question 2 */}
        <Accordion sx={style.childAccordion}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={style.expandIconMore} />}
            >
                <Typography sx={style.questionAccordion}>Where can I find the guidance office in the Campus of Bustos?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={style.answerText}>Second Floor, beside school chapel/prayer room. Look for Patnubay at Sanggunian Signage.</Typography>
            </AccordionDetails>
        </Accordion>

        {/* Question 3 */}
        <Accordion sx={style.childAccordion}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={style.expandIconMore} />}
            >
                <Typography sx={style.questionAccordion}>What is the time where the guidance is available for counseling?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={style.answerText}>Every weekdays, except holidays. You can create appointment to this website or may book appointment at their FB page.</Typography>
            </AccordionDetails>
        </Accordion>

        {/* Question 4 */}
        <Accordion sx={style.childAccordion}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={style.expandIconMore} />}
            >
                <Typography sx={style.questionAccordion}>Can I have a walk-in counseling?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={style.answerText}>Yes, as long as there is no other set appointment that day. You may also visit the Guidance office for further questions about your concern.</Typography>
            </AccordionDetails>
        </Accordion>



    </AccordionDetails>
</Accordion>



</Box>
  </Box>
): (
<>
{data && auth.currentUser ? (
        <Box sx={{ p: 2 }}>
          {/* User Header */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              p: 2,
              bgcolor: "background.paper",
            }}
          >
            <Avatar
              src={user.users
                ?.filter((user) => user.id === urlId)
                .map((user) => user.Image)}
              sx={{
                bgcolor: "primary.main",
                width: { xs: 8, md: 13 },
                height: { xs: 8, md: 13 },
              }}
            >
              M
            </Avatar>
            <Box sx={{ ml: 1, flexGrow: 1 }}>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Typography
                  sx={{ fontSize: { xs: 6, md: 15 }, fontWeight: "bold" }}
                >
                  Counselor
                  {/* {user.users?.filter((user) => user.id  === urlId).map((user) => user.UserName)} */}
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                {/* <Typography variant="caption" sx={{ color: "gray" }}>
              1m ago
            </Typography> */}
              </Box>
              <Typography
                sx={{ fontSize: { xs: 6, md: 13 }, color: "gray" }}
                noWrap
              >
                active now
              </Typography>
            </Box>
          </Box>
          <Divider orientation="horizontal" flexItem />

          {/* Chat Info */}
          <Box
            sx={{
              p: 1,
              height: 400,
              overflow: "auto",
              display: "flex",
              flexDirection: "column-reverse",
            }}
            ref={divRef}
          >
            {data.map((item) => (
              <Box>
                {/* Student UI **/}
                <Grid container sx={{ my: 2 }}>
                  <Grid
                    item
                    xs={1}
                    sx={
                      item.from === "Student"
                        ? { display: "flex" }
                        : { display: "none" }
                    }
                  >
                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                      <Box sx={{ flexGrow: 1 }} />

                      <Avatar
                        src={
                          item.from === "Student"
                            ? user.users
                                ?.filter((user) => user.id === urlId)
                                .map((user) => user.Image)
                            : item.from === "Admin"
                            ? user.currentUserData[0].Image
                            : null
                        }
                        sx={{
                          bgcolor: "primary.main",
                          ml: 1,
                          width: { xs: 10, md: 13 },
                          height: { xs: 10, md: 13 },
                        }}
                      >
                        M
                      </Avatar>
                    </Box>
                  </Grid>

                  <Grid
                    item
                    xs={11}
                    sx={
                      item.from === "Student"
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: 6, md: 13 },
                        color: "gray",
                        textAlign: "left",
                        ml: 2,
                      }}
                      noWrap
                    >
                      {/* 1m ago */}

                      {item.Created !== null &&
                        formatDistance(
                          subDays(new Date(), 0),
                          new Date(item.Created?.seconds * 1000)
                        )}
                    </Typography>
                    <Box sx={item.from === "Student" ? UserUi : AdminUi}>
                      <Typography
                        sx={{ fontSize: { xs: 8, md: 13 }, color: "black" }}
                      >
                        {item.message}
                      </Typography>
                    </Box>
                  </Grid>

                  {/* Admin UI **/}

                  <Grid
                    item
                    xs={11}
                    sx={
                      item.from === "Admin"
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: 6, md: 13 },
                        color: "gray",
                        textAlign: "right",
                        ml: 2,
                      }}
                      noWrap
                    >
                      {/* 1m ago */}
                      {item.Created !== null &&
                        formatDistance(
                          subDays(new Date(), 0),
                          new Date(item.Created?.seconds === null * 1000)
                        )}
                    </Typography>
                    <Box sx={item.from === "Admin" ? AdminUi : UserUi}>
                      <Typography
                        sx={{ fontSize: { xs: 8, md: 13 }, color: "black" }}
                      >
                        {item.message}
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid
                    item
                    xs={1}
                    sx={
                      item.from === "Admin"
                        ? { display: "flex" }
                        : { display: "none" }
                    }
                  >
                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                      <Box sx={{ flexGrow: 1 }} />

                      <Avatar
                        src={
                          item.from === "Student"
                            ? user.users
                                ?.filter((user) => user.id === urlId)
                                .map((user) => user.Image)
                            : item.from === "Admin"
                            ? user.currentUserData[0].Image
                            : null
                        }
                        sx={{
                          bgcolor: "primary.main",
                          ml: 1,
                          width: { xs: 6, md: 13 },
                          height: { xs: 6, md: 13 },
                        }}
                      >
                        M
                      </Avatar>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Box>

          <Box sx={{ display: "flex" }}>
            <FormControl sx={{ mt: 2 }} variant="outlined" fullWidth>
              <OutlinedInput
                sx={{ height: { xs: 30, md: "100%" } }}
                size="small"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message"
              />
            </FormControl>
            <IconButton
              size="small"
              sx={{
                ml: 3,
                mt: 2,
                bgcolor: (theme) => theme.palette.primary.main,
                borderRadius: 1,
              }}
              onClick={handleSendMessage}
            >
              <SendIcon
                sx={{ fontSize: { xs: 20, md: "100%" }, color: "white" }}
              />
            </IconButton>
          </Box>
        </Box>
      ) : (
        <Box sx={{ p: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              p: 2,
              bgcolor: "background.paper",
              height: 550,
              width: 550,
              textAlign: "center",
            }}
          >
            <Typography variant="h6" color="initial" sx={{ mx: "auto" }}>
              Select a chat
            </Typography>
          </Box>
        </Box>
      )}
</>
)}

    

    </Box>
  );
}
