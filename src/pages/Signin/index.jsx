import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import logo from "../../assets/images/semply-logo.png";
import { useDispatch, useSelector } from "react-redux";
import { getPass } from "../../store/features/dbData/EmailsSlice";
import { getId, getData } from "../../store/features/dbData/dbSlice";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const dbData = useSelector((state) => state.dbData.value);
  const emails = useSelector((state) => state.emails.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");

  return (
    <div>
      <Box sx={{ mt: 3, ml: 3 }}>
        <img width={120} src={logo} />
      </Box>
      <Box
        maxWidth="sm"
        sx={{
          height: "550px",
          //   boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
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
            sx={{ textAlign: "center", fontSize: 30, fontWeight: 500, mt: 7 }}
          >
            Log In to Semply
          </Typography>

          <FormControl variant="outlined" sx={{ width: "100%", mt: 5 }}>
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
          <Button
            onClick={() => {
              emails.forEach((element) => {
                if (element == Email) {
                  dispatch(getPass(element));
                  dispatch(getId(element));
                  setTimeout(() => {
                    navigate("/signup");
                  }, 1500);
                } else {
                  return "";
                }
              });
            }}
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
          </Button>
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
    </div>
  );
}
