import React from "react";
import "../styles/App.css";
import Navbar from "../components/Navbar";
import Homepage from "./Homepage";
import Login from "./Login";
import UpdateProfile from "./UpdateProfile";
import Profile from "./Profile";
import ForgotPassword from "./ForgotPassword";
import Dashboard from "./Dashboard";
import ChatPage from "./ChatPage";
import Signin from "./Signin";
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
          <Route
            path="/update-profile"
            element={
              <RequireAuth redirectTo="/login">
                <UpdateProfile />
              </RequireAuth>
            }
          />

          {/* <Route
            path="/login"
            element={
              <IsLoggedIn redirectTo="/profile">
                <Login />
              </IsLoggedIn>
            }
          /> */}
          <Route path="/signin" caseSensitive={false} element={<Signin />} />

          <Route path="/login" caseSensitive={false} element={<Login />} />

          <Route path="/profile" caseSensitive={false} element={<Profile />} />

          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route path="/chatpage" element={<ChatPage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/" element={<Dashboard />} />
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
