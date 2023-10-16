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
      <Box
        component="form"
        onSubmit={(event) => {
          event.preventDefault();
          props.setWorkClose;
          props.setWorkSave(true);
        }}
      >
        <DialogTitle>Work History</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
          {/* <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText> */}
          <TextField
            required
            margin="dense"
            id="Job"
            label="Job Position"
            type="text"
            variant="standard"
            sx={{ width: "400px" }}
            onChange={(event) => {
              props.setJob(event.target.value);
            }}
          />
          <TextField
            required
            margin="dense"
            id="companyName"
            label="Company Name"
            type="text"
            variant="standard"
            sx={{ width: "400px" }}
            onChange={(event) => {
              props.setCompanyName(event.target.value);
            }}
          />
          <TextField
            required
            margin="dense"
            id="Description"
            label="Description"
            type="text"
            variant="standard"
            sx={{ width: "400px" }}
            onChange={(event) => {
              props.setDescription(event.target.value);
            }}
          />
          <Box sx={{ display: "flex", gap: 5 }}>
            <TextField
              required
              margin="dense"
              id="from"
              label="From"
              type="number"
              variant="standard"
              sx={{ width: "100px" }}
              onChange={(event) => {
                props.setFrom(event.target.value);
              }}
            />
            <TextField
              required
              margin="dense"
              id="to"
              label="To"
              type="number"
              variant="standard"
              sx={{ width: "100px" }}
              onChange={(event) => {
                props.setTo(event.target.value);
              }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.setWorkClose}>Cancel</Button>
          <Button type="submit">Save</Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}

export default WorkHistory;
