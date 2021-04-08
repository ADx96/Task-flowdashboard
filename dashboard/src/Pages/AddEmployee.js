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
import authStore from "../Stores/authStore";

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

function AddEmployee() {
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
    manger: "",
  });

  const handleChange = (event) =>
    setEmployee({ ...employee, [event.target.name]: event.target.value });

  const handleImage = (event) =>
    setEmployee({ ...employee, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signup(employee);
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
              name="username"
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              name="password"
              onChange={handleChange}
            />

            <TextField
              id="outlined-basic"
              label="E-Mail"
              variant="outlined"
              onChange={handleChange}
            />

            <br />
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              onChange={handleChange}
            />
            <br />
            <br />
            <TextField id="outlined-basic" label="Gender" variant="outlined" />
            <TextField
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              onChange={handleChange}
            />
            <br />
            <br />
            <TextField
              id="outlined-basic"
              label="Job Title"
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="Direct Supervisor"
              variant="outlined"
              onChange={handleChange}
              name="manager"
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
