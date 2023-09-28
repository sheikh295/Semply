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

export default function Signin() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <div>
      <Box
        maxWidth="sm"
        sx={{
          height: "600px",
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
        <Typography
          sx={{ textAlign: "center", fontSize: 30, fontWeight: 500, mt: 7 }}
        >
          Log In to Semply
        </Typography>

        <FormControl variant="outlined" sx={{ width: "100%", mt: 5 }}>
          <OutlinedInput
            required
            sx={{
              height: "40px",
              width: "350px",
              borderRadius: "10px",
              fontSize: 12,
              marginX: "auto",
            }}
            placeholder="Email or Username"
            id="emailOrusername"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
          <OutlinedInput
            required
            sx={{
              height: "40px",
              width: "350px",
              borderRadius: "10px",
              fontSize: 12,
              marginX: "auto",
              mt: 3,
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
          <Button
            variant="contained"
            sx={[
              {
                mt: 3,
                marginX: "auto",
                borderRadius: "100px",
                width: "350px",
                bgcolor: "#E7457A",
                mb: 3,
              },
              { ":hover": { bgcolor: "#06005C" } },
            ]}
          >
            Login with email
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
        </FormControl>
      </Box>
    </div>
  );
}
