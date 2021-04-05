import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { observer } from "mobx-react";
import TextField from "@material-ui/core/TextField";
import { Alligner } from "./Styles";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

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
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  }); //const for the switch , for full function need to be in another js and exported as function
  //has been added as a test

  return (
    <Alligner className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="User Name" variant="outlined" />
      <br />
      <TextField id="outlined-basic" label="Password" variant="outlined" />
      <br />
      <TextField id="outlined-basic" label="E-Mail" variant="outlined" />
      <br />
      <TextField id="outlined-basic" label="First Name" variant="outlined" />
      <TextField id="outlined-basic" label="Last Name" variant="outlined" />
      <br />
      <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
      <br />

      <TextField id="outlined-basic" label="Gender" variant="outlined" />
      <br />
      <TextField id="outlined-basic" label="Job Title" variant="outlined" />
      <TextField
        id="outlined-basic"
        label="Direct Supervisor"
        variant="outlined"
      />
      <TextField id="outlined-basic" label="Deparment" variant="outlined" />
      <br />

      <FormControlLabel
        control={
          <Switch
            checked={state.checkedB}
            //onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Supervisor"
      />
      {/* form control lable is the blue switch */}
    </Alligner>
  );
}

export default observer(AddEmployee);
