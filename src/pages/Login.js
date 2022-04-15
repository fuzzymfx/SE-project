import React, { useState } from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";

import LooneyStandOne from "../assets/images/looney/standone.png";
import SpaceOne from "../assets/images/space/one.png";
import SpaceTwo from "../assets/images/space/two.png";
import SpaceThree from "../assets/images/space/three.png";

import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ErrorIcon from "@mui/icons-material/Error";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";

export default function Login() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    showPassword: false,
  });

  const [validation, setValidation] = useState(true);

  let navigate = useNavigate();
  const navigateSignIn = () => {
    const path = "/signin";
    navigate(path);
  };

  const navigateSignUp = () => {
    if (values.username == "" || values.email == "" || values.password == "") {
      setValidation(false);
    } else {
      const path = "/homepage";
      navigate(path);
    }
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login">
      <img src={SpaceOne} className="space__one" />
      <img src={SpaceTwo} className="space__two" />
      <img src={SpaceThree} className="space__three" />

      <div className="mains">
        <div className="mains__left">
          <img src={LooneyStandOne} className="looney__standone" />
          <div className="left">
            <div className="left__greetings">
              <p>Welcome Back</p>
            </div>
            <div className="left__info">
              <p>
                To keep connected with us please login with your personal info
              </p>
            </div>
            <div className="left__signinButton">
              <button
                onClick={() => {
                  navigateSignIn();
                }}
                className="siginIn__button"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>

        {/* Right Panel */}

        <div className="mains__right">
          <div className="right__header">
            <p>Create Account</p>
          </div>
          <div className="right__socialIcons">
            <TwitterIcon className="social twitter" />
            <FacebookIcon className="social facebook" />
            <GoogleIcon className="social google" />
            <LinkedInIcon className="social linkedin" />
          </div>
          <div className="right__desc">
            <p>or use your email for registration</p>
          </div>
          <div className="right__signupForm">
            <FormControl sx={{ m: 2, width: "50ch" }}>
              <InputLabel htmlFor="outlined-adornment-username">
                Username
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-username"
                value={values.username}
                onChange={handleChange("username")}
                startAdornment={
                  <InputAdornment position="start">
                    <PersonOutlineIcon />
                  </InputAdornment>
                }
                label="username "
              />
            </FormControl>

            <FormControl sx={{ m: 2, width: "50ch" }}>
              <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
              <OutlinedInput
                id="outlined-adornment-email"
                value={values.email}
                onChange={handleChange("email")}
                startAdornment={
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                }
                label="email"
              />
            </FormControl>

            <FormControl sx={{ m: 2, width: "50ch" }}>
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                startAdornment={
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="password "
              />
            </FormControl>
          </div>
          <div>
            {validation ? (
              <></>
            ) : (
              <p className="validation__error">
                <ErrorIcon className="login__validation__error" /> Enter a Valid
                Email or Password!!
              </p>
            )}
          </div>
          <div>
            <button onClick={navigateSignUp} className="signup__button">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
