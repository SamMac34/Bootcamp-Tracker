// HOOKS and React Router
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
<<<<<<< HEAD
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js/auto';
// import { BarChart } from '..BarChart/BarChart';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import UserPage from '../UserPage/UserPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import AlumniForm from '../AlumniForm/AlumniForm';
import ProfilePage from '../ProfilePage/ProfilePage'
import ComparisonPage from '../ComparisonPage/ComparisonPage';
import AdminPage from '../AdminPage/AdminPage';
import './App.css';

=======
} from "react-router-dom";
// Components
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import UserPage from "../UserPage/UserPage";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import AlumniForm from "../AlumniForm/AlumniForm";
import ProfilePage from "../ProfilePage/ProfilePage";
import ComparisonPage from "../ComparisonPage/ComparisonPage";
import AdminPage from "../AdminPage/AdminPage";
// MUI and CSS
import "./App.css";
import { Box } from "@mui/material";
// Chart.js
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js/auto";
>>>>>>> 49057b02c7d2ca2c6657a1afcd5047d8959c455b

Chart.register(CategoryScale);

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: "FETCH_USER" });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Box sx={{ marginBottom: 15 }}>
          <Nav />
        </Box>
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/user" />

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <Route exact path="/login">
            {user.id ? (
              // If the user is already logged in,
              // redirect to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the login page
              <LoginPage />
            )}
          </Route>

          <Route exact path="/registration">
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the registration page
              <RegisterPage />
            )}
          </Route>

          <Route exact path="/home">
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the Landing page
              <LoginPage />
            )}
          </Route>

          <Route exact path="/alumniform">
            <AlumniForm />
          </Route>

          <ProtectedRoute exact path="/adminpage">
            {/* Add access level conditional */}
            <AdminPage />
          </ProtectedRoute>

          <Route exact path="/profile/:profileId">
            <ProfilePage />
          </Route>
          <Route exact path="/compare">
            <ComparisonPage />
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Box
<<<<<<< HEAD
          sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}> 
=======
          sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
        >
>>>>>>> 49057b02c7d2ca2c6657a1afcd5047d8959c455b
          <Footer />
        </Box>
      </div>
    </Router>
  );
}

export default App;
