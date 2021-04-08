import { makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";

import { observer } from "mobx-react";

import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import React, { Fragment, useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "../Pages/Form.css";

import TextField from "@material-ui/core/TextField";
import { Alligner } from "./Styles";
import tasksMobx from "../Mobx/TaskMobx";
import employeesMobx from "../Mobx/EmployeeMobx";
import TaskItem from "../Components/TaskItem";
import { Button } from "@material-ui/core";

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

function Managetasks() {
  const classes = useStyles();
  const [query] = useState("");

  const [task, setTask] = useState({
    details: "",
    employeename: "",
    complete: "",
    startDate: "",
    deadLine: "",
  });

  const handleChange = (event) =>
    setTask({ ...task, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    tasksMobx.createTask(task);
  };

  const taskList = tasksMobx.tasks
    .filter((task) => task.taskname.toLowerCase().includes(query.toLowerCase()))
    .map((task) => <TaskItem task={task} key={task.id} />);

  return (
    <div style={{ display: "flex" }}>
      <Paper className={classes.root}>
        <h2 style={{ textAlign: "center" }}>Task List</h2>
        {taskList}
      </Paper>
      <form onSubmit={handleSubmit}>
        <Alligner className={classes.root} noValidate autoComplete="off">
          <br />
          <TextField
            id="outlined-basic"
            label="Briefing"
            multiline
            name="details"
            rows={4}
            variant="outlined"
            onChange={handleChange}
          />

          <div>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Employee
              </InputLabel>

              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                onChange={handleChange}
                label="Department"
                name="employeename"
              >
                <MenuItem>
                  <em>None</em>
                </MenuItem>
              </Select>
            </FormControl>
          </div>

          <Paper />
          <br />
          <TextField
            id="date"
            label="Task Start Date"
            type="date"
            name="startDate"
            onChange={handleChange}
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
            onChange={handleChange}
            name="deadLine"
            defaultValue="2017-05-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button type="submit" variant="contained">
            Assign task
          </Button>
        </Alligner>
      </form>
    </div>
  );
}
export default observer(Managetasks);
