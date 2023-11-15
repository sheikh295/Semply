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
import { getData } from "../../store/features/dbData/dbSlice";
import { LoadingButton } from "@mui/lab";
import { animated, useTransition } from "@react-spring/web";
import { useNavigate } from "react-router-dom";

function SigninPass() {
  const passes = useSelector((state) => state.dbData.emails);
  const isOnboarded = useSelector((state) => state.dbData.userData.isOnboarded);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [Pass, setPass] = useState("");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  const transition = useTransition(visible, {
    from: { x: 300, opacity: 0 },
    enter: { x: 0, opacity: 1 },
    leave: { x: -300, opacity: 0 },
  });

  const loginSubmitHandler = (event) => {
    event.preventDefault();
    const pass = atob(passes);
    if (pass == Pass) {
      setLoading(true);
      setError(false);
      setTimeout(() => {
        setLoading(false);
        setVisible(false);
        setTimeout(() => {
          if (isOnboarded == false) {
            navigate("/onboarding");
          } else {
            navigate("/dashboard");
          }
        }, 400);
      }, 2000);
    } else {
      setLoading(true);
      setTimeout(() => {
        setError(true);
        setLoading(false);
      }, 1500);
    }
  };

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
              height: "450px",
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
                height: "450px",
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
                    mt: 7,
                  }}
                >
                  Welcome, Please Enter Your Password
                </Typography>
                <Box
                  component="form"
                  onSubmit={(event) => {
                    loginSubmitHandler(event);
                  }}
                >
                  <FormControl variant="outlined" sx={{ width: "100%" }}>
                    {error ? (
                      <InputLabel sx={{ color: "red", mt: 1.5 }}>
                        Incorrect Password
                      </InputLabel>
                    ) : (
                      ""
                    )}
                    <OutlinedInput
                      autoFocus
                      error={error ? true : false}
                      onChange={(event) => setPass(event.target.value)}
                      required
                      sx={{
                        height: "40px",
                        width: "350px",
                        borderRadius: "10px",
                        fontSize: 12,
                        marginX: "auto",
                        mt: 3,
                      }}
                      placeholder="Password"
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
                    Login
                  </LoadingButton>
                </Box>
                <Divider sx={{ width: "350px", marginX: "auto", mt: 5 }}>
                  <Typography>Forgot Your Password</Typography>
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
                  Froget Password
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

export default SigninPass;
