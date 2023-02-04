import { React, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { LOGIN_REQUEST } from "../redux/actions";
import { Grid, Button } from "@mui/material";
import InputComponent from "./common/InputComponent";
import Snackbar from "./common/Snackbar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

import "./LoginForm.scss";
const LoginForm = (props) => {
  const { isLoading, loginRequest } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorBoxOpen, setErrorBoxOpen] = useState(false);
  const [errorBoxMsg, setErrorBoxMsg] = useState({
    msg: "",
    type: "",
  });
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleSumbmit = (e) => {
    e.preventDefault();
    if (!email?.trim()) {
      setError((prev) => {
        return { ...prev, email: "Please enter email" };
      });
      return;
    } else if (!password?.trim()) {
      setError((prev) => {
        return { ...prev, password: "Please enter password" };
      });
      return;
    } else {
      let payload = {
        email: email,
        password: password,
      };
      loginRequest(payload);
      navigate("/home");
      console.log("!!!navi");
      // setErrorBoxMsg({
      //   msg: "Login Successfully",
      //   type: "success",
      // });
    }
  };
  return (
    <>
      <form onSubmit={(e) => handleSumbmit(e)} className="login-form">
        <div className="header-form">
          <AccountCircleIcon className="icon" />
        </div>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12}>
            <InputComponent
              value={email}
              label="Enter Email"
              autoFocus={true}
              setValue={(value) => {
                setEmail(value);
                setError((prev) => {
                  return { ...prev, email: null };
                });
              }}
              error={error?.email}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <InputComponent
              value={password}
              label="Password"
              setValue={(value) => {
                setPassword(value);
                setError((prev) => {
                  return { ...prev, password: null };
                });
              }}
              error={error?.password}
            />
          </Grid>
          <Snackbar
            open={errorBoxOpen}
            handleClose={() => {
              setErrorBoxOpen(false);
              setErrorBoxMsg("");
            }}
            message={errorBoxMsg}
          />
          <Grid item xs={12} sm={12} className="login-form-button">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={isLoading}
              className="btn"
            >
              Login
            </Button>
          </Grid>{" "}
          <Grid item xs={12} sm={12} className="message">
            <div>
              <input type="checkbox" /> Remember ME
            </div>
          </Grid>{" "}
        </Grid>
      </form>
    </>
  );
};

LoginForm.propTypes = {
  isLoading: PropTypes.bool,
  loginRequest: PropTypes.func,
};

const mapStateToProps = (state) => ({
  isLoading: state.authReducer.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  loginRequest: (data) => dispatch({ type: LOGIN_REQUEST, payload: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
