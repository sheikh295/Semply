import React, { useState } from "react";
import EducationCard from "./EducationCard";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import WorkCard from "./WorkCard";

function WorkList(props) {
  const work2 = props.work2;
  const work3 = props.work3;
  return (
    <div>
      <List>
        <ListItem sx={{ p: 0, m: 0 }}>
          <WorkCard setWorkSave={props.setWorkSave} />
        </ListItem>
        <Collapse in={work2}>
          <ListItem
            sx={{ p: 0, m: 0 }}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                title="Delete"
                onClick={() => {
                  props.setWork2(false);
                }}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <WorkCard />
          </ListItem>
        </Collapse>
        <Collapse in={work3}>
          <ListItem
            sx={{ p: 0, m: 0 }}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                title="Delete"
                onClick={() => {
                  props.setWork3(false);
                }}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <WorkCard />
          </ListItem>
        </Collapse>
      </List>
    </div>
  );
}

export default WorkList;
