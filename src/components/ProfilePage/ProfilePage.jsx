import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./ProfilePage.css";
import {List, ListItem, ListItemText,Button, Divider, Grid,Typography} from "@mui/material";
//import {useSelector, useDispatch} from 'react-redux';

//profilePage function
function ProfilePage() {
  //bringing in use history 
  const history = useHistory();

  // bringing in useDisptch
  const dispatch = useDispatch();

    // bringing in use selector and pulling from profileReducer/user
    const userId = useSelector((store) => store.user);
    const profileInfo  = useSelector((store) => store.profileReducer);
    console.log("user id is", userId);
    console.log("profile data is ", profileInfo);

  const CardStyle = {
    width: "100%",
    maxWidth: 360,
    marginLeft: "50px",
    border: "5px solid black",
  };
  const CardStyle2 = {
    width: "100%", maxWidth: 360,
    bgcolor: "white",
    marginTop: "20px",  marginLeft: "50px",
    textAlign: "center",
    border: "5px solid black",
  };
  const CardStyle3 = {
    border: "5px solid black",
    marginRight: "80px",
  };
  const CardStyle4 = {
    border: "5px solid black",
    marginRight: "80px",marginTop: "300px"
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          {/* Grid Item 1*/}
          <List sx={CardStyle} aria-label="profile-details">
            <ListItem>
              <ListItemText primary="Current Job:" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Salary:" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Number of Jobs:" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Bootcamp:" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Graduation Date:" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="State:" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Company Name:" />
            </ListItem>
          </List>
          <List sx={CardStyle2}
            component="" aria-label="profile-details" align="center">
            <Typography variant="h5" component="header">
              Benefits:
            </Typography>
            <Divider />
            <ListItem>
              <ListItemText primary="Health Insurance:" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Dental Insurance:" />
            </ListItem>
            <ListItem>
              <ListItemText primary="401K:" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Long Term Disability:" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Short Term Disability:" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Equity:" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Graduation to First Posistion:" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Yearly Bonus:" />
            </ListItem>
            <ListItem>
              <ListItemText primary="PTO:" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={4} marginLeft="200px">
          {/* Grid Item 3*/}
          <List sx={CardStyle3}>
            <ListItem>
              <Grid>
                <Typography variant="h6">Role Timeline</Typography>
                <Divider />
              </Grid>
            </ListItem>
          </List>
          <List sx={CardStyle4}>
            <ListItem>
              <Grid>
                <Typography variant="h6">Salary Overtime</Typography>
                <Divider />
              </Grid>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Grid marginLeft="150px" marginTop="20px">
        <Button variant="contained" size="large">
          + New Job
        </Button>
      </Grid>
    </>
  );
}

export default ProfilePage;
