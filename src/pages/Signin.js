import React, { useState } from "react";
import "../styles/signin.css";
import { useNavigate } from "react-router-dom";
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
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";

function Signin() {
  const [validation, setValidation] = useState(true);

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    showPassword: false,
  });

  let navigate = useNavigate();
  const navigateSignUp = () => {
    const path = "/login";
    navigate(path);
  };

  const navigateSignIn = () => {
    if (values.email == "" || values.password == "") {
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
    <div className="signin">
      <img src={SpaceOne} className="space__one" />
      <img src={SpaceTwo} className="space__two" />
      <img src={SpaceThree} className="space__three" />

      <div className="signin__mains">
        <div className="signin__left">
          <div className="leftPanel__header">
            <p>Sign In to Your Account</p>
          </div>
          <div className="signin__social__icons">
            <TwitterIcon className="signin__social twitter" />
            <FacebookIcon className="signin__social facebook" />
            <GoogleIcon className="signin__social google" />
            <LinkedInIcon className="signin__social linkedin" />
          </div>
          <div className="signin__desc">
            <p>or use your email account</p>
          </div>

          <div className="signin__form">
            <FormControl sx={{ m: 2, width: "50ch" }}>
              <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
              <OutlinedInput
                id="outlined-adornment-email"
                value={values.email}
                onChange={handleChange("email")}
                autoComplete="username"
                startAdornment={
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                }
                label="email "
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

          <div className="signin__forgotPassword">
            <a className="signin__forgotlink" href="#">
              <p>forgot password?</p>
            </a>
          </div>

          <div>
            {validation ? (
              <></>
            ) : (
              <p className="validation__error">
                <ErrorIcon className="validation__errorIcon" /> Invalid
                Credentials!!
              </p>
            )}
          </div>

          <div>
            <button onClick={navigateSignIn} className="signin__submit">
              Sign In
            </button>
          </div>
        </div>
        <div className="signin__right">
          <div className="signin__right__header">
            <p>Hello Friend</p>
          </div>
          <div className="signin__right__desc">
            <p>Enter your personal details and start your journey with us</p>
          </div>

          <div>
            <button
              onClick={navigateSignUp}
              className="signin__right__signup__button"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
