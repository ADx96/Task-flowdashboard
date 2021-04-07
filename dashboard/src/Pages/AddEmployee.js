import { makeStyles } from "@material-ui/core/styles";
import { observer } from "mobx-react";
import TextField from "@material-ui/core/TextField";
import { Alligner } from "./Styles";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import React, { Fragment, useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Card from "../Components/Card";
import Paper from "@material-ui/core/Paper";
import Icon from "@material-ui/core/Icon";
import employeesMobx from "../Mobx/EmployeeMobx";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function AddEmployee(props) {
  const classes = useStyles();
  const [employee, setEmployee] = useState({
    username: "",
    firstName: "",
    password: "",
    lastName: "",
    email: "",
    gender: "",
    role: "",
    jobTitle: "",
    image: "",
    department: "",
  });
  const [age, setAge] = React.useState("");
  const [Role, setRole] = React.useState("");
  const [Department, setDepartment] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleChange2 = (event) => {
    setRole(event.target.value);
  };
  const handleChange3 = (event) => {
    setDepartment(event.target.value);
  };
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleChange1 = (event) => {
    setEmployee({ ...employee, [event.target.name]: event.target.value });
  };

  const handleImage = (event) =>
    setEmployee({ ...employee, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    employeesMobx.createEmployee(employee);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex%" }}>
        <div style={{ marginRight: "500px", float: "right" }}>
          <Card />
        </div>
        <div>
          <Alligner className={classes.root} noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="User Name"
              variant="outlined"
              name="firstName"
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              name="password"
            />
            <br />
            <br />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
            <TextField id="outlined-basic" label="E-Mail" variant="outlined" />
            <br />
            <br />
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
            />
            <br />
            <br />
            <TextField id="outlined-basic" label="Gender" variant="outlined" />
            <TextField
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              id="outlined-basic"
              label="Job Title"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Direct Supervisor"
              variant="outlined"
            />
            <br />
            <Fragment></Fragment>
            <br />
            <br />
            <div>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Male</MenuItem>
                  <MenuItem value={20}>Female</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Role}
                  onChange={handleChange2}
                >
                  <MenuItem value={10}>Employee</MenuItem>
                  <MenuItem value={20}>Supervisor</MenuItem>
                  <MenuItem value={30}>Admin</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Department
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={Department}
                  onChange={handleChange3}
                  label="Department"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>

            <Paper />

            <input
              accept="image/*"
              className={classes.input}
              id="icon-button-file"
              type="file"
              onChange={handleImage}
              name="image"
            />
            <label htmlFor="icon-button-file">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera />
              </IconButton>
            </label>

            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<Icon>send</Icon>}
              type="submit"
            >
              AddEmployee
            </Button>
          </Alligner>
        </div>
      </div>
    </form>
  );
}

export default observer(AddEmployee);
