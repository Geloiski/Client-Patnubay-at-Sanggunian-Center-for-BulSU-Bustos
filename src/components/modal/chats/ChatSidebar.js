import React from "react";
import {
  Container,
  Avatar,
  Box,
  Grid,
  Typography,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Link,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link as RouterLink, useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ChatSidebar({ urlId, data, handleUrlId, handleBot }) {
  const user = useSelector((state) => state.user);
  console.log(data);

  // const useQuery = () => {
  //   return new URLSearchParams(useLocation().search);
  // };
  // let queryy = useQuery();
  // let urlId = queryy.get("id");


  return (
    <Box sx={{ p: 2 }}>
      {/* Search */}
      {/* <FormControl sx={{  mt: 2 }} variant="outlined" fullWidth>
        <OutlinedInput
        sx={{height: {xs: 20, md: 30}}}
          size="small"
          // value={values.weight}
          // onChange={handleChange('weight')}
          placeholder="Search"
          endAdornment={<SearchIcon color="primary" sx={{ width: {xs: 7, md: 13}}}/>}
        />
      </FormControl> */}

      {/* User List */}
      <Box sx={{ maxHeight: 450, overflow: 'auto', mt: 2 }}>

        {user.chats.filter((chat, k) => (chat.id === user.currentUserData[0].UserUid)).map((chat, k) => (

          <Box
            onClick={() => { handleUrlId(chat.id); handleBot() }}
            key={k}
            sx={{
              display: "flex",
              alignItems: "center",
              p: .5,
              bgcolor: "background.paper",
              mb: 2,
              cursor: "pointer",
              boxShadow: 2
            }}
          >
            <Avatar src={user.users?.filter((user) => user.id === chat.id).map((user) => user.Image)} sx={{ bgcolor: "primary.main", width: { xs: 10, md: 40 }, height: { xs: 10, md: 40 } }}></Avatar>
            <Box sx={{ ml: 1, flexGrow: 1 }}>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Typography sx={{ fontSize: { xs: 6, md: 13 }, fontWeight: "bold" }}>
                  Counselor
                  {/* {user.users.filter((user) => user.id  === chat.id).map((user) => user.UserName)} */}
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                {/* <Typography variant="caption" sx={{ color: "gray", fontSize: 10, }}>
                1m ago
              </Typography> */}
              </Box>

              <Typography sx={{ fontSize: { xs: 6, md: 13 } }} noWrap>
                {data.map(i => i.from)[data.length - 1] === "Student" ? "You: " : "Counselor: "}
                {data.map(i => i.message)[data.length - 1]}
              </Typography>
            </Box>
          </Box>
        ))}

        {/* Chat Bot**/}
        <Box
          onClick={() => handleBot()}
          sx={{
            display: "flex",
            alignItems: "center",
            p: .5,
            bgcolor: "background.paper",
            mb: 2,
            cursor: "pointer",
          }}
        >
          <Avatar sx={{ bgcolor: "primary.main", width: { xs: 10, md: 40 }, height: { xs: 10, md: 40 } }}>M</Avatar>
          <Box sx={{ ml: 1, flexGrow: 1 }}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={{ fontSize: { xs: 6, md: 13 }, fontWeight: "bold" }}>
                Frequently Asked Questions
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              {/* <Typography variant="caption" sx={{ color: "gray", fontSize:  {xs: 6, md: 10}, }}>
                Online
              </Typography> */}
            </Box>
            <Typography sx={{ fontSize: { xs: 6, md: 13 } }} noWrap>
              Frequently Asked Questions
            </Typography>
          </Box>
        </Box>



      </Box>
    </Box>
  );
}
