import { Box, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import Education from "./Education";

function EducationCard(props) {
  const [EducationOpen, setEducationOpen] = useState(false);
  const [degreeN, setDegreeN] = useState("eg: Software Engineering");
  const [uniN, setUniN] = useState("eg: COMSATS");
  const [description, setDescription] = useState(
    "Description: eg. Skills, achievments, leadership roles etc"
  );
  const [from, setFrom] = useState("0000");
  const [to, setTo] = useState("0000");
  return (
    <div>
      <Box
        sx={{
          width: "380px",
          minHeight: "110px",
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
            {degreeN}
          </Typography>
          <Typography
            sx={{
              opacity: 0.8,
              mt: 1,

              fontStyle: "italic",
              fontSize: 14,
            }}
          >
            {uniN}
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
              setEducationOpen(true);
            }}
          >
            <EditIcon />
          </IconButton>
        </Box>
      </Box>
      <Education
        open={EducationOpen}
        setEducationClose={() => {
          setEducationOpen(false);
          setDegreeN("eg: Software Engineering");
          setUniN("eg: COMSATS");
          setDescription(
            "Description: eg. Skills, achievments, leadership roles etc"
          );
          setFrom("0000");
          setTo("0000");
        }}
        setDegreeN={setDegreeN}
        setUniN={setUniN}
        setDescription={setDescription}
        setFrom={setFrom}
        setTo={setTo}
        setEducationSave={() => {
          props.setEducationSave;
          setEducationOpen(false);
        }}
      />
    </div>
  );
}

export default EducationCard;
