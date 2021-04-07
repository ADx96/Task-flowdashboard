import { makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { observer } from "mobx-react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import React, { Fragment, useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Select from "@material-ui/core/Select";
import "../Pages/Form.css";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Alligner } from "./Styles";
import tasksMobx from "../Mobx/TaskMobx";
import employeesMobx from "../Mobx/EmployeeMobx";

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

const ExpandableTableRow = ({ children, expandComponent, ...otherProps }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <>
      <TableRow {...otherProps}>
        <TableCell padding="checkbox">
          <IconButton onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {children}
      </TableRow>
      {isExpanded && (
        <TableRow>
          <TableCell padding="checkbox" />
          {expandComponent}
        </TableRow>
      )}
    </>
  );
};

function Managetasks() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: false,
  });
  const [task, setTask] = useState({
    username: "",
    firstName: "",
    password: "",
    lastName: "",
    startdate: "",
    deadline: "",
  });

  const [age, setAge] = React.useState("");
  const [Role, setRole] = React.useState("");
  const [Employee, setEmployee] = React.useState("");

  const handleChange1 = (event) => {
    setTask({ ...task, [event.target.name]: event.target.value });
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleChange2 = (event) => {
    setRole(event.target.value);
  };

  const handleChange3 = (event) => {
    setEmployee(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    tasksMobx.createTask(task);
  };
  return (
    <div style={{ display: "flex" }}>
      <Paper className={classes.root}>
        <h2 style={{ textAlign: "center" }}>Task List</h2>
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
      </Paper>
      <form onSubmit={handleSubmit}>
        <Alligner className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Task Number"
            variant="outlined"
          />

          <br />
          <TextField
            id="outlined-basic"
            label="Briefing"
            multiline
            rows={4}
            variant="outlined"
          />

          <div>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Employee
              </InputLabel>

              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={Employee}
                onChange={handleChange3}
                label="Department"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                value={employeesMobx.department}
              </Select>
            </FormControl>
          </div>

          <Paper />
          <br />
          <TextField
            id="date"
            label="Task Start Date"
            type="date"
            name="date"
            defaultValue="2017-05-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br />
          <br />
          <TextField
            id="date"
            label="Task Deadline"
            type="date"
            name="endDate"
            defaultValue="2017-05-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Alligner>
      </form>
    </div>
  );
}
export default observer(Managetasks);
