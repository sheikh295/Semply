import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Avatar,
  Backdrop,
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Fade,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Modal,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import logo from "../../assets/images/semply-logo.png";
import { useDispatch, useSelector } from "react-redux";
import { getPass } from "../../store/features/dbData/EmailsSlice";
import {
  getId,
  getData,
  setDisclaimerfalse,
} from "../../store/features/dbData/dbSlice";
import { useNavigate } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import CloseIcon from "@mui/icons-material/Close";
import styled from "@emotion/styled";
import { useTransition, animated } from "@react-spring/web";

function Signin() {
  const dbData = useSelector((state) => state.dbData.value);
  const emails = useSelector((state) => state.emails.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const disclaimer = useSelector((state) => state.dbData.disclaimer);
  const [visible, setVisible] = useState(true);

  const BootstrapDialog = styled(Dialog)(() => ({
    "& .MuiDialogContent-root": {
      padding: 2,
    },
    "& .MuiDialogActions-root": {
      padding: 1,
    },
  }));

  const matchEmail = (email) => {
    return email == Email;
  };

  const loginSubmitHandler = (event) => {
    event.preventDefault();
    const eml = emails.find(matchEmail);
    if (eml == Email) {
      dispatch(getPass(eml));
      dispatch(getId(eml));
      setLoading(true);
      setError(false);
      setTimeout(() => {
        setLoading(false);
        setVisible(false);
        setTimeout(() => {
          navigate("/signin");
        }, 400);
      }, 1500);
      return;
    } else {
      setLoading(true);
      setTimeout(() => {
        setError(true);
        setLoading(false);
      }, 1500);
    }
  };

  const transition = useTransition(visible, {
    from: { x: 300, opacity: 0 },
    enter: { x: 0, opacity: 1 },
    leave: { x: -300, opacity: 0 },
  });

  return (
    <div>
      <BootstrapDialog
        sx={{
          width: "500px",
          mx: "auto",
          mt: -10,
        }}
        onClose={() => {
          dispatch(setDisclaimerfalse());
        }}
        aria-labelledby="customized-dialog-title"
        open={disclaimer}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Disclaimer
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={() => {
            dispatch(setDisclaimerfalse());
          }}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography sx={{ ml: 2, mr: 2, mt: 1, mb: 1 }} gutterBottom>
            Some of this Application's workflow is inspired by upwork, and is
            developed to test and showcase my skills. <br /> <br /> Any advice
            for improvements are welcomed, you can email at
            mamoordev@sheikhstudio.tech. <br /> <br /> This Application is being
            hosted on Hostinger wich is not the best place to host such
            applications. As React along with react router is used to build this
            spa, so if you are at some page and reload, the hostinger will look
            for html file with the name given in url, but as react router is
            used to route and navigate and no html file with such name will be
            present so hostinger will throw a 404 error and you'll have to start
            from the root page. So make sure you don't reload while testing the
            App. However you can go forward or backward
          </Typography>
        </DialogContent>
      </BootstrapDialog>
      <Box sx={{ mt: 3, ml: 3 }}>
        <img width={120} src={logo} />
      </Box>
      {transition((style, item) =>
        item ? (
          <animated.div
            style={{
              width: "500px",
              height: "550px",
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
                height: "550px",
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
                    width: "260px",
                    marginX: "auto",
                    textAlign: "center",
                    fontSize: 30,
                    fontWeight: 500,
                    mt: 7,
                    display: "flex",
                  }}
                >
                  Log In to{" "}
                  <Box sx={{ ml: 1 }}>
                    <img width={120} src={logo} />
                  </Box>
                </Typography>
                <Box
                  component="form"
                  onSubmit={(event) => {
                    loginSubmitHandler(event);
                  }}
                >
                  <FormControl variant="outlined" sx={{ width: "100%", mt: 5 }}>
                    <InputLabel
                      sx={
                        error ? { mt: -2, color: "red" } : { display: "none" }
                      }
                    >
                      Incorrect Email
                    </InputLabel>
                    <OutlinedInput
                      error={error ? true : false}
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
                  <LoadingButton
                    type="submit"
                    loading={loading ? true : false}
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
                    Continue with Email
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
                  <Typography>Don't have a Semply Account</Typography>
                </Divider>
                <Button
                  onClick={() => {
                    setVisible(false);
                    setTimeout(() => {
                      navigate("/signup");
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
                  Sign Up
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

export default Signin;
