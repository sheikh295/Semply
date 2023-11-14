import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Fade,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import logo from "../../assets/images/semply-logo.png";
import { useDispatch, useSelector } from "react-redux";
import {
  getData,
  createUser,
  getId,
} from "../../store/features/dbData/dbSlice";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import { animated, useTransition } from "@react-spring/web";

function Signup() {
  const emails = useSelector((state) => state.emails.value);
  const dbData = useSelector((state) => state.dbData.value);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [Email, setEmail] = useState("");
  const [Pass, setPass] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [visible, setVisible] = useState(true);

  const matchEmail = (email) => {
    return email == Email;
  };

  const transition = useTransition(visible, {
    from: { x: 300, opacity: 0 },
    enter: { x: 0, opacity: 1 },
    leave: { x: -300, opacity: 0 },
  });

  return (
    <div>
      <Box sx={{ mt: 3, ml: 3 }}>
        <img width={120} src={logo} />
      </Box>
      {transition((style, item) =>
        item ? (
          <animated.div
            style={{
              width: "500px",
              height: "600px",
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              marginTop: "auto",
              marginBottom: "auto",
              marginLeft: "auto",
              marginRight: "auto",
              ...style,
            }}
          >
            <Box
              sx={{
                width: "500px",
                height: "600px",
                boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                mt: "auto",
                mb: "auto",
                ml: "auto",
                mr: "auto",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
                border: "1px solid #ded7d9",
              }}
            >
              <Box sx={{ width: "350px", margin: "auto" }}>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: 500,
                    mt: 4,
                  }}
                >
                  Enter following details to create your account
                </Typography>
                {error ? (
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: 12,
                      mt: 0,
                      mb: 0,
                      color: "red",
                    }}
                  >
                    Already Registered Email
                  </Typography>
                ) : (
                  ""
                )}
                <Box
                  component="form"
                  onSubmit={(event) => {
                    event.preventDefault();
                    setLoading(true);
                    const alreadyRegistered = emails.find(matchEmail);
                    if (alreadyRegistered == undefined) {
                      const encodedPass = btoa(Pass);
                      dispatch(createUser([fName, lName, Email, encodedPass]));
                      dispatch(getId(Email));
                      setError(false);
                      setTimeout(() => {
                        setVisible(false);
                        dispatch(getData());
                        setTimeout(() => {
                          navigate("/onboarding");
                        }, 400);
                      }, 1500);
                    } else {
                      setTimeout(() => {
                        setError(true);
                        setLoading(false);
                      }, 1500);
                    }
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <FormControl variant="outlined">
                      <OutlinedInput
                        onChange={(event) => setfName(event.target.value)}
                        required
                        sx={{
                          height: "40px",
                          width: "150px",
                          borderRadius: "10px",
                          fontSize: 12,
                          marginX: "auto",
                          mt: 3,
                        }}
                        id="fName"
                        type="text"
                        placeholder="First Name"
                      />
                    </FormControl>
                    <FormControl variant="outlined">
                      <OutlinedInput
                        onChange={(event) => setlName(event.target.value)}
                        required
                        sx={{
                          height: "40px",
                          width: "150px",
                          borderRadius: "10px",
                          fontSize: 12,
                          marginX: "auto",
                          mt: 3,
                        }}
                        id="lName"
                        type="text"
                        placeholder="Last Name"
                      />
                    </FormControl>
                  </Box>
                  <FormControl variant="outlined" sx={{ width: "100%", mt: 2 }}>
                    <OutlinedInput
                      onChange={(event) => setEmail(event.target.value)}
                      required
                      sx={{
                        height: "40px",
                        width: "350px",
                        borderRadius: "10px",
                        fontSize: 12,
                        marginX: "auto",
                      }}
                      placeholder="Email"
                      id="emailOrusername"
                      startAdornment={
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <FormControl variant="outlined" sx={{ width: "100%" }}>
                    <OutlinedInput
                      onChange={(event) => {
                        setPass(event.target.value);
                      }}
                      required
                      sx={{
                        height: "40px",
                        width: "350px",
                        borderRadius: "10px",
                        fontSize: 12,
                        marginX: "auto",
                        mt: 2,
                      }}
                      id="password"
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      placeholder="Password"
                    />
                  </FormControl>
                  <LoadingButton
                    loading={loading ? true : false}
                    type="submit"
                    variant="contained"
                    sx={[
                      {
                        mt: 3,
                        borderRadius: "100px",
                        width: "100%",
                        bgcolor: "#E7457A",
                        mb: 3,
                        marginX: "auto",
                      },
                      { ":hover": { bgcolor: "#06005C" } },
                    ]}
                  >
                    Sign Up
                  </LoadingButton>
                </Box>
                <Divider sx={{ width: "350px", marginX: "auto" }}>
                  <Typography>or</Typography>
                </Divider>
                <Button
                  variant="contained"
                  sx={{
                    width: "350px",
                    marginX: "auto",
                    borderRadius: "100px",
                    bgcolor: "#4285F4",
                    mt: 3,
                    justifyContent: "space-between",
                  }}
                >
                  <Avatar
                    alt="missing"
                    src="../../../src/assets/images/google-logo.png"
                    sx={{ width: 28, height: 28, ml: -1 }}
                  />
                  Continue with Google
                  <Typography />
                </Button>
                <Divider sx={{ width: "350px", marginX: "auto", mt: 5 }}>
                  <Typography>Already Have an account</Typography>
                </Divider>
                <Button
                  onClick={() => {
                    setVisible(false);
                    setTimeout(() => {
                      navigate("/");
                    }, 400);
                  }}
                  variant="outlined"
                  sx={[
                    {
                      width: "350px",
                      marginX: "auto",
                      borderRadius: "100px",
                      mt: 3,
                      borderColor: "#E7457A",
                      color: "#E7457A",
                    },
                    {
                      ":hover": {
                        bgcolor: "rgba(231, 69, 122, 0.2)",
                        borderColor: "rgba(231, 69, 122, 0.5)",
                      },
                    },
                  ]}
                >
                  Log in
                </Button>
              </Box>
            </Box>
          </animated.div>
        ) : (
          ""
        )
      )}
    </div>
  );
}

export default Signup;
