import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";

function EducationCard(props) {
  return (
    <div>
      <Box
        sx={{
          width: "93%",
          p: 3,
          borderRadius: "10px",
          mt: 2,
          boxShadow: "0 10px 40px -12px rgb(0 0 0 / 0.25)",
          position: "relative",
          display: "flex",
        }}
      >
        <Box sx={{ width: "80%" }}>
          <Typography sx={{ opacity: 0.8, fontStyle: "italic" }}>
            eg: Bachelors of Computer Science
          </Typography>
          <Typography
            sx={{
              opacity: 0.8,
              mt: 1,

              fontStyle: "italic",
              fontSize: 14,
            }}
          >
            eg: University of Illinois, Chicago, United States
          </Typography>
          <Typography
            sx={{
              opacity: 0.8,
              mt: 2,

              fontStyle: "italic",
              fontSize: 14,
            }}
          >
            Decription: eg. If any, achievemrnts, skills learnt, leadership
            roles etc
          </Typography>
        </Box>
        <Box
          sx={{
            width: "20%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <Typography
            sx={{
              opacity: 0.8,
              fontSize: 14,
            }}
          >
            yyyy - yyyy
          </Typography>
          <IconButton
            aria-label="edit"
            sx={{ opacity: 0.8 }}
            onClick={props.setEducationOpen}
          >
            <EditIcon />
          </IconButton>
        </Box>
      </Box>
    </div>
  );
}

export default EducationCard;
