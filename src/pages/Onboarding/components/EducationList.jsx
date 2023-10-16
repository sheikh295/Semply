import React, { useState } from "react";
import EducationCard from "./EducationCard";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import { TransitionGroup } from "react-transition-group";

function EducationList(props) {
  const education2 = props.education2;
  const education3 = props.education3;
  return (
    <div>
      <List>
        <ListItem sx={{ p: 0, m: 0 }}>
          <EducationCard setEducationSave={props.setEducationSave} />
        </ListItem>
        <Collapse in={education2}>
          <ListItem
            sx={{ p: 0, m: 0 }}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                title="Delete"
                onClick={() => {
                  props.setEducation2(false);
                }}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <EducationCard />
          </ListItem>
        </Collapse>
        <Collapse in={education3}>
          <ListItem
            sx={{ p: 0, m: 0 }}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                title="Delete"
                onClick={() => {
                  props.setEducation3(false);
                }}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <EducationCard />
          </ListItem>
        </Collapse>
      </List>
    </div>
  );
}

export default EducationList;
