import {
  Autocomplete,
  Box,
  FormControl,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import logo from "../../assets/images/semply-logo.png";
import { animated, useTransition } from "@react-spring/web";
import { AccountCircle } from "@mui/icons-material";

function Onboarding() {
  const [visible, setVisible] = useState(true);

  const transition = useTransition(visible, {
    from: { x: 300, opacity: 0 },
    enter: { x: 0, opacity: 1 },
    leave: { x: -300, opacity: 0 },
  });

  const date = [
    { label: "1" },
    { label: "2" },
    { label: "3" },
    { label: "4" },
    { label: "5" },
    { label: "6" },
    { label: "7" },
    { label: "8" },
    { label: "9" },
    { label: "10" },
    { label: "11" },
    { label: "12" },
    { label: "13" },
    { label: "14" },
    { label: "15" },
    { label: "16" },
    { label: "17" },
    { label: "18" },
    { label: "19" },
    { label: "20" },
    { label: "21" },
    { label: "22" },
    { label: "23" },
    { label: "24" },
    { label: "25" },
    { label: "26" },
    { label: "27" },
    { label: "28" },
    { label: "29" },
    { label: "30" },
    { label: "31" },
  ];
  const month = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Nov",
    "Dec",
  ];
  const year = [
    "1970",
    "1971",
    "1972",
    "1973",
    "1974",
    "1975",
    "1976",
    "1977",
    "1978",
    "1979",
    "1980",
    "1981",
    "1982",
    "1983",
    "1984",
    "1985",
    "1986",
    "1987",
    "1988",
    "1989",
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
  ];

  return (
    <div style={{ height: "1100px" }}>
      <Box sx={{ mt: 3, ml: 3 }}>
        <img width={120} src={logo} />
      </Box>
      {transition((style, item) =>
        item ? (
          <animated.div
            style={{
              width: "1000px",
              height: "1000px",
              boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              marginTop: "40px",
              marginBottom: "auto",
              marginLeft: "auto",
              marginRight: "auto",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "10px",
              border: "1px solid #ded7d9",
              ...style,
            }}
          >
            <Box component="form">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "50%",
                  mx: "auto",
                }}
              >
                <TextField
                  sx={{
                    height: "40px",
                    width: "230px",
                    fontSize: 12,
                    mt: 3,
                  }}
                  id="fName"
                  label="First Name"
                  variant="standard"
                  defaultValue="First Name"
                  inputProps={{
                    readOnly: true,
                  }}
                />
                <TextField
                  sx={{
                    height: "40px",
                    width: "230px",
                    fontSize: 12,
                    mt: 3,
                  }}
                  id="lName"
                  label="First Name"
                  variant="standard"
                  defaultValue="Last Name"
                  inputProps={{
                    readOnly: true,
                  }}
                />
              </Box>
              <Box sx={{ width: "50%", mt: 5, mx: "auto" }}>
                <TextField
                  onChange={(event) => setEmail(event.target.value)}
                  sx={{
                    height: "40px",
                    width: "500px",
                    borderRadius: "10px",
                    fontSize: 12,
                    marginX: "auto",
                  }}
                  id="Email"
                  label="Email"
                  variant="standard"
                  defaultValue="Email"
                  InputProps={{
                    readOnly: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "50%",
                  mx: "auto",
                }}
              >
                <TextField
                  sx={{
                    height: "40px",
                    width: "230px",
                    fontSize: 12,
                    mt: 3,
                  }}
                  id="username"
                  label="Username"
                  variant="standard"
                />
                <Box
                  sx={{
                    width: "230px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Autocomplete
                    sx={{
                      height: "40px",
                      width: "70px",
                      fontSize: 8,
                      mt: 3,
                    }}
                    id="date"
                    options={date}
                    getOptionLabel={(option) => option.label}
                    renderInput={(params) => (
                      <TextField {...params} label="DD" variant="standard" />
                    )}
                  />
                  <Autocomplete
                    sx={{
                      height: "40px",
                      width: "70px",
                      fontSize: 8,
                      mt: 3,
                    }}
                    id="Month"
                    options={month}
                    getOptionLabel={(option) => option}
                    renderInput={(params) => (
                      <TextField {...params} label="MM" variant="standard" />
                    )}
                  />
                  <Autocomplete
                    sx={{
                      height: "40px",
                      width: "70px",
                      fontSize: 8,
                      mt: 3,
                    }}
                    id="Year"
                    options={year}
                    getOptionLabel={(option) => option}
                    renderInput={(params) => (
                      <TextField {...params} label="YYYY" variant="standard" />
                    )}
                  />
                </Box>
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

export default Onboarding;
