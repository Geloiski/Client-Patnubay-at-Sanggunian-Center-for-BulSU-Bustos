import React from "react";
import { Link } from "react-router-dom";

// Import styling
import style from "../styles/NavUser";

// Import Material UI
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import { formatDistance, subDays } from 'date-fns'

// Import Material UIs
import {
  Box,
  Typography,
  Button,
  TextField,
  Modal,
  List,
  ListItem,
  IconButton,
  Tabs,
  Tab,
  Drawer,
  Badge,
  Menu,
  MenuItem,
  ListItemIcon,
  Popover,
  Avatar,
} from "@mui/material";
// icon
import Logout from "@mui/icons-material/Logout";
import {

  setChats,
  setMyData,
} from "../redux/actions/userAction";
// Import Image
import logo from "../image/logo.png";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
// firebase
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { format } from "date-fns";
function NavUser() {
  const user = useSelector((state) => state.user);
  const NotificationList = (user.history.filter((history) => history.StudentUser === user.currentUserData[0].UserUid));
  // account
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // notif
  const [anchorNotif, setAnchorNotif] = React.useState(null);

  const handleClickNotif = (event) => {
    setAnchorNotif(event.currentTarget);
  };

  const handleCloseNotif = () => {
    setAnchorNotif(null);
  };

  const openNotif = Boolean(anchorNotif);
  const id = open ? "simple-popover" : undefined;

  const buttonLogout = () => {
    auth.signOut();
    setChats([]);
    window.location.reload();
  };

    // Drawer - Menu Link
    const [linkDrawer, setLinkDrawer] = React.useState(false);

    // Toggle Drawer - Link Drawer
    const toggleDrawerLink = (open) => (e) => {
        setLinkDrawer(open);
    };

     // Drawer Content
     const drawerContent = () => (
      <Box>
          {/* Header */}
          <Box sx={style.headerContainer}>
              <img
                  src={logo}
                  alt=""
                  style={{
                      width: '75px',
                      height: '75px',
                      objectFit: 'contain',
                      objectPosition: 'center',
                  }}
              />
              <Typography sx={style.logoText}>
                  PaSan: Patnubay at <br /> Sangunihan Center
              </Typography>
          </Box>

          {/* Content */}
          <Box sx={style.drawerLinkContainer}>
              <Link to="/home" style={{ textDecoration: "none" }}>
                  <Typography sx={style.perLinkText}>Home</Typography>
              </Link>

              <Link to="/counseling" style={{ textDecoration: "none" }}>
                  <Typography sx={style.perLinkText}>Counseling</Typography>
              </Link>

              <Link to="/assesment" style={{ textDecoration: "none" }}>
                  <Typography sx={style.perLinkText}>Assessment</Typography>
              </Link>

              <Link to="/profile" style={{ textDecoration: "none" }}>
                  <Typography sx={style.perLinkText}>Profile</Typography>
              </Link>

              {/* <Link to="/" style={{ textDecoration: "none" }}>
                  <Typography sx={style.perLinkText}>Notification</Typography>
              </Link> */}

              <Link  style={{ textDecoration: "none" }} onClick={() =>{ auth.signOut(); setMyData([{ UserType: "" }]);setChats([])}}>
                  <Typography sx={style.perLinkText}>Logout</Typography>
              </Link>
          </Box>

          {/* end */}
          {/* <Box sx={style.drawerEnd}>
              <Typography sx={style.copyrightText}>Copyright © 2022 - Pasan Center</Typography>
          </Box> */}



      </Box>
  );
  
  return (
    <div>
      {/* Main Container */}
      <Box sx={style.mainContainer}>
        {/* Center Container */}
        <Box sx={style.centerContainer}>
          {/* Logo */}
          <Box sx={style.logoContainer}>
            <img
              src={logo}
              alt=""
              style={{
                width: "75px",
                height: "75px",
                objectFit: "contain",
                objectPosition: "center",
              }}
            />
            <Typography sx={style.logoText}>
              PaSan: Patnubay at <br /> Sangunihan Center
            </Typography>
          </Box>

          {/* Navigational Links */}
          <Box sx={style.navigationContainer}>
            {/* Nav List */}
            <Box sx={style.linkListContainer}>
              <List sx={style.linkList}>
                <ListItem>
                  <Link to="/home" style={{ textDecoration: "none" }}>
                    <Typography sx={style.navLink}>Home</Typography>
                  </Link>
                </ListItem>

                <ListItem>
                  <Link to="/counseling" style={{ textDecoration: "none" }}>
                    <Typography sx={style.navLink}>Counseling</Typography>
                  </Link>
                </ListItem>

                <ListItem>
                  <Link to="/assesment" style={{ textDecoration: "none" }}>
                    <Typography sx={style.navLink}>Assessment</Typography>
                  </Link>
                </ListItem>
              </List>
            </Box>

            {/* Nav Button */}
            <Box sx={style.navigationContainer}>
              <Box>
                <IconButton onClick={handleClickNotif}>
                  <Badge badgeContent={NotificationList.length} color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
              </Box>

              <Box>
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  {user.currentUserData[0].Image === "" ? (
 <AccountCircleIcon />
                  ) : (
                    <Avatar sx={{ width: 22, height: 22 }} src={user.currentUserData[0].Image}>M</Avatar>
                  )}
                 
                 
                </IconButton>
              </Box>
            </Box>
          </Box>

          {/* Account  */}
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <Link to="/profile" underline="none" style={{ textDecoration: "none" }}>
              <MenuItem>
              <ListItemIcon>
                <AccountBoxIcon fontSize="small" />
              </ListItemIcon>
              <Typography color={"black"}>Profile</Typography>
            </MenuItem>
            </Link>

            <MenuItem onClick={buttonLogout}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>

          {/* Notif  */}
          <Popover
            id={id}
            open={openNotif}
            anchorEl={anchorNotif}
            onClose={handleCloseNotif}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
          >
            {NotificationList.map((notif,k) => (
              <Box sx={style.notifContainer} key={k}>
                <Typography sx={style.notifText}>
                  {notif.Title.substring(0, 60)}...
                </Typography>

                <Typography sx={style.notifTextTime}>
                  { notif.Created?.seconds &&
                  formatDistance(subDays(new Date(), 0), new Date(notif.Created?.seconds * 1000))}
                {/* {format(
                            new Date(notif.Created.seconds * 1000),
                            "pp"
                          )} */}
                          </Typography>
              </Box>
            ))}
            {/* <Typography sx={{ p: 2 }}>The content of the Popover.</Typography> */}
          </Popover>

          {/* Burger Menu Container */}
          <Box sx={style.menuContainer}>
            <IconButton onClick={toggleDrawerLink(true)}>
              <MenuIcon />
            </IconButton>
          </Box>

           {/* Drawer */}
           <Drawer
                    anchor={"right"}
                    open={linkDrawer}
                    onClose={toggleDrawerLink(false)}
                    PaperProps={{
                        sx: {
                            background: "#fff",
                            width: 300,
                        },
                    }}
                >
                    {drawerContent()}
                </Drawer>

        </Box>
      </Box>
    </div>
  );
}

export default NavUser;
