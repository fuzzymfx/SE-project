import React from "react";
import "../styles/App.css";
import Navbar from "../components/Navbar";
import Homepage from "./Homepage";
import Login from "./Login";
import Signup from "./Signup";
import UpdateProfile from "./UpdateProfile";
import Profile from "./Profile";
import ForgotPassword from "./ForgotPassword";
import Dashboard from "./Dashboard";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route
            path="/update-profile"
            element={
              <RequireAuth redirectTo="/login">
                <UpdateProfile />
              </RequireAuth>
            }
          />

          <Route
            path="/login"
            element={
              <IsLoggedIn redirectTo="/profile">
                <Login />
              </IsLoggedIn>
            }
          />

          <Route path="/signup" caseSensitive={false} element={<Signup />} />

          <Route path="/login" caseSensitive={false} element={<Login />} />

          <Route path="/profile" caseSensitive={false} element={<Profile />} />

          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </>
  );
}

function RequireAuth({ children, redirectTo }) {
  // const { currentUser } = useAuth()
  // return currentUser ? children : <Navigate to={redirectTo} />
  return true;
}
function IsLoggedIn({ children, redirectTo }) {
  // const { currentUser } = useAuth()
  // return currentUser ? <Navigate to={redirectTo} /> : children
  return true;
}

export default App;
