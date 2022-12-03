import React, { useEffect } from "react";

// Import Styling
import style from "../styles/Assesment";

// Import Components
import SwipeUp from "../components/SwipeUp";
import ChatButton from "../components/ChatButton";
import NavUser from "../components/NavUser";
import FooterUser from "../components/FooterUser";

// Import Material UI
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import { db, storage, auth } from "../utils/firebase";

// Import Icons
import SearchIcon from "@mui/icons-material/Search";
import { useHistory } from "react-router-dom";
// redux
import { useSelector } from "react-redux";

//date fns
import { format } from 'date-fns';

function Assesment({handleCloseModal}) {
  const history = useHistory();
  const user = useSelector((state) => state.user);
  const handleButtonOpenAssesment = (id) => {
    history.push(`form?id=${id}`);
  };

  const handleButtonOpenAssesmentAlert = (id) => {
    alert("Assesment is Closed");
  };

  const [search, setSearch] = React.useState("");
  const [data, setData] = React.useState([]);

  console.log(search);

  useEffect(() => {
    if(search !== ""){
    setData(user.forms.filter((form) => form.Title.toLowerCase().includes(search.toLowerCase())) ) 
    
    } else{
setData(user.forms)
    }

  }, [search])

  console.log(data);


  return (
    <div>
      {/* Navbar Here */}
      <NavUser />

      {/* Main Container Here */}
      <Box>
        {/* Middle Container */}
        <Box sx={style.middleContainer}>
          {/* Main Grid Container */}
          <Grid container>
            {/* Left */}
            <Grid item xs={12} md={9} sx={style.gridLeft}>
              {/* Header Here */}
              <Box sx={style.formHeader}>
                <Box>
                  <Typography sx={style.headerTitle}>
                    Assessment Forms
                  </Typography>
                </Box>
              </Box>
              {/* Search Bar */}
              <Box sx={style.searchContainer}>
                <TextField fullWidth sx={style.searchText}  onChange={(e) => setSearch(e.target.value)} />

                <Button variant="contained" sx={style.searchButton}>
                  <SearchIcon />
                  Search
                </Button>
              </Box>

              {/* Forms */}
              <Box>
                {/* Per Form - Open*/}
                {data.map((form, k) => (
                  <Box
                    sx={form.Status === "Open" ? style.perFormItemOpen : style.perFormItemClose }
                    key={k}
                    onClick={() => form.Status === "Open" ?  handleButtonOpenAssesment(form.id) : handleButtonOpenAssesmentAlert(form.id)}
                  >
                    <Box sx={style.formTitleContainer}>
                      <Box>
                        <Typography sx={style.formTitle}>
                          {form.Title}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography sx={form.Status === "Open" ? style.formStatusTrue: style.formStatusFalse}>{form.Status}</Typography>
                      </Box>
                    </Box>

                    <Box>
                      <Typography sx={style.formContent}>
                        {form.Description}
                      </Typography>
                    </Box>
                  </Box>
                ))}

    
              </Box>
            </Grid>

            {/* Right */}
            <Grid item xs={12} md={3} sx={style.gridRight}>
              <Box sx={style.answeredMain}>
                <Box sx={style.completeHeader}>
                  <Typography sx={style.headerTitle}>
                    Completed Forms
                  </Typography>
                </Box>

                {/* Completed List */}
                { user.formsFeedback.filter((item) => item.UserUid === auth.currentUser.uid).map((form, k) => (
                <Box sx={style.answeredForms} key={k}>
                  <Typography sx={style.answeredTitle}>
                    {user.forms.filter((item) => item.id === form.FormsId).map((item) => item.Title).toString()}
                  </Typography>
                  <Typography sx={style.answeredDateAndAY}>
                  {format(new Date((form?.Created.seconds*1000)), 'MM/dd/yyyy')}
                  </Typography>
                  {/* <Typography sx={style.answeredDateAndAY}>
                    Academic Year: 2022
                  </Typography> */}
                </Box>))}

              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* SwipeUp Here */}
        <SwipeUp />
        {/* Chat Button Here */}
        <ChatButton handleCloseModal={handleCloseModal}/>
      </Box>
      <FooterUser />
    </div>
  );
}

export default Assesment;
