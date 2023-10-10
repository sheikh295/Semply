import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

function Education(props) {
  return (
    <Dialog open={props.open} onClose={props.setEducationClose}>
      <DialogTitle>Education History</DialogTitle>
      <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
        {/* <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText> */}
        <TextField
          margin="dense"
          id="DegreeName"
          label="Degree Name"
          type="text"
          variant="standard"
          sx={{ width: "400px" }}
        />
        <TextField
          margin="dense"
          id="UniName"
          label="University Name"
          type="text"
          variant="standard"
          sx={{ width: "400px" }}
        />
        <TextField
          margin="dense"
          id="Description"
          label="Description"
          type="text"
          variant="standard"
          sx={{ width: "400px" }}
          placeholder="Skills, achievments, leadership roles etc"
        />
        <Box sx={{ display: "flex", gap: 5 }}>
          <TextField
            margin="dense"
            id="from"
            label="From"
            type="number"
            variant="standard"
            sx={{ width: "100px" }}
          />
          <TextField
            margin="dense"
            id="to"
            label="To"
            type="number"
            variant="standard"
            sx={{ width: "100px" }}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.setEducationClose}>Cancel</Button>
        <Button onClick={props.setEducationClose}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}

export default Education;
