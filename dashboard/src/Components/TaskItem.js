import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import React, { Fragment, useState } from "react";
import { observer } from "mobx-react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    overflowX: "auto",
    flexGrow: 1,
  },
  table: {
    minWidth: 650,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
const TaskItem = ({ task }) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>

        <React.Fragment>
          <div>
            <li>
              <h3>Employee name</h3>
              <h4>task Deatails</h4>
              <h4>Supervisor</h4>
              <h4>Status</h4>
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Task Details
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            </li>
          </div>
        </React.Fragment>
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
};

export default observer(TaskItem);
