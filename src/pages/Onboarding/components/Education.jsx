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
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEducationHist } from "../../../store/features/misc/miscSlice";
import { Form } from "react-router-dom";

function Education(props) {
  return (
    <Dialog open={props.open} onClose={props.setEducationClose}>
      <Box
        component="form"
        onSubmit={(event) => {
          event.preventDefault();
          props.setEducationSave(true);
        }}
      >
        <DialogTitle>Education History</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
          {/* <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText> */}
          <TextField
            required
            margin="dense"
            id="DegreeName"
            label="Degree Name"
            type="text"
            variant="standard"
            sx={{ width: "400px" }}
            onChange={(event) => {
              props.setDegreeN(event.target.value);
            }}
          />
          <TextField
            required
            margin="dense"
            id="UniName"
            label="University Name"
            type="text"
            variant="standard"
            sx={{ width: "400px" }}
            onChange={(event) => {
              props.setUniN(event.target.value);
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
          <Button onClick={props.setEducationClose}>Cancel</Button>
          <Button type="submit">Save</Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}

export default Education;
