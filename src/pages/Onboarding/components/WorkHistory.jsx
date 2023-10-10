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

function WorkHistory(props) {
  return (
    <Dialog open={props.open} onClose={props.setWorkClose}>
      <DialogTitle>Work History</DialogTitle>
      <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
        {/* <DialogContentText>
      To subscribe to this website, please enter your email address here. We
      will send updates occasionally.
    </DialogContentText> */}
        <TextField
          margin="dense"
          id="position"
          label="Position"
          type="text"
          variant="standard"
          sx={{ width: "400px" }}
        />
        <TextField
          margin="dense"
          id="Company Name"
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
        <Button onClick={props.setWorkClose}>Cancel</Button>
        <Button onClick={props.setWorkClose}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}

export default WorkHistory;
