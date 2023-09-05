// HOOKS and React Router
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// MUI
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// Custom Components
import LogOutButton from "../LogOutButton/LogOutButton";

function DrawerComponent() {
  // HOOKS
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  // Hamburger menu
  const [open, setOpen] = useState(false);
// Load user id in the Route for Profile
  useEffect(() => {
    dispatch({ type: "FETCH_USER" });
  }, []);
  const list = () => (
    <div style={{ width: 250 }} onClick={() => setOpen(false)}>
      {/* this is a list of what is in our drawer */}
      <List>
        {[
          <Typography onClick={() => history.push("/user")}> Home </Typography>,
          // THESE NEED TO PUSH TO THE CORRECT COMPONENTS WHEN THEY EXIST
          <Typography onClick={() => history.push(`/profile/${user.id}`)}>
            Profile
          </Typography>,
          <Typography onClick={() => history.push("/alumniform")}>
            Alumni Form
          </Typography>,
          <Typography onClick={() => history.push("/compare")}>
            Compare Bootcamps
          </Typography>,
          <Typography onClick={() => history.push("/adminpage")}>
            Admin Page
          </Typography>,
          <LogOutButton />,
        ].map((label, index) => (
          <ListItem button key={index}>
            <ListItemText primary={label} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <Button
        style={{ float: "right", color: "white", textDecoration: "underline" }}
        onClick={() => {
          setOpen(true);
        }}
      >
        <MenuIcon />
      </Button>
      <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
        {list()}
      </Drawer>
    </div>
  );
}

export default DrawerComponent;
