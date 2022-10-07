import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button, Container, Box, Typography } from "@mui/material";


import HowToRegIcon from "@mui/icons-material/HowToReg";

const Signup = (props) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const signup = (e) => {
    document.cookie = "loggedIn=true;max-age=60*1000";
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    // axios.post('https://spotteddb.herokuapp.com/auth/signup', {
    axios
      .post("http://localhost:3009/signup", {
        username: state.username,
        password: state.password,
      })
      .then((response) => {
        console.log(response);
        document.cookie = `jwt=${response.headers.authorization};max-age=60*1000`;
        document.cookie = `userId=${response.data.userId};max-age=60*1000`;
        signup();
      })
      .catch(function (error) {
        console.log(error);
      });
    this.setState({
      username: "",
      password: "",
    });
    navigate("/login");
  };

  return (
    <div className="logger">
      <Container maxWidth="auto">
        <Box
          style={{ background: "#ffffff", color: "#000000", opacity: "0.9" }}
          display="flex"
          flex-direction={"column"}
          maxWidth={600}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={30}
          padding={5}
          borderRadius={5}
          boxShadow="5px 5px 10px #ccc"
          sx={{
            ":hover": {
              boxShadow: "8px 8px 8px black",
            },
          }}
        >
          <div>
            <Typography variant="h4" padding={3}>
              Welcome
            </Typography>
            <Typography variant="h6" padding={3}>
              Already Registered? <br />
              <Button>
                <Link to="/login">Login</Link>
              </Button>
            </Typography>
          </div>

          <form
            className="login-form"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <TextField
              required
              margin="normal"
              onChange={handleChange}
              value={state.username}
              name="username"
              label="User Name"
              type="text"
            />

            <TextField
              required
              margin="normal"
              // required
              onChange={handleChange}
              value={state.password}
              name="password"
              label="Password"
              type="password"
            />

            <Button
              endIcon={<HowToRegIcon />}
              sx={{ marginTop: 3, BorderRadius: 3, width: 10}}
              type="submit"
              variant="contained"
              color="primary"
            >
              SIGN UP
            </Button>
            <br />
          </form>
        </Box>
      </Container>
    </div>
  );
};

export default Signup;