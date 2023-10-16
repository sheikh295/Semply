import { Box, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import WorkHistory from "./WorkHistory";

function WorkCard(props) {
  const [workOpen, setWorkOpen] = useState(false);
  const [Job, setJob] = useState("eg: Software Engineer");
  const [companyName, setCompanyName] = useState("eg: NASA");
  const [description, setDescription] = useState(
    "Description: eg. Skills, achievments, leadership roles etc"
  );
  const [from, setFrom] = useState("0000");
  const [to, setTo] = useState("0000");
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
            {Job}
          </Typography>
          <Typography
            sx={{
              opacity: 0.8,
              mt: 1,

              fontStyle: "italic",
              fontSize: 14,
            }}
          >
            {companyName}
          </Typography>
          <Typography
            sx={{
              opacity: 0.8,
              mt: 2,

              fontStyle: "italic",
              fontSize: 14,
            }}
          >
            {description}
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
            {from} - {to}
          </Typography>
          <IconButton
            aria-label="edit"
            sx={{ opacity: 0.8 }}
            onClick={() => {
              setWorkOpen(true);
            }}
          >
            <EditIcon />
          </IconButton>
        </Box>
      </Box>
      <WorkHistory
        open={workOpen}
        setWorkClose={() => {
          setWorkOpen(false);
        }}
        setJob={setJob}
        setCompanyName={setCompanyName}
        setDescription={setDescription}
        setFrom={setFrom}
        setTo={setTo}
        setWorkSave={props.setWorkSave}
      />
    </div>
  );
}

export default WorkCard;
