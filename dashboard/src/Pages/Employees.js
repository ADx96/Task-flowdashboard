import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { observer } from "mobx-react";
import Button from "@material-ui/core/Button";
import employeesMobx from "../Mobx/EmployeeMobx";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto",
  },
  table: {
    minWidth: 650,
  },
});

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

function Employee() {
  const classes = useStyles();

  return (
    <div className="table-container" style={{ display: "flex" }}>
      <Paper className={classes.root}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox" />
              <TableCell>Image</TableCell>
              <TableCell align="right">Employee ID </TableCell>
              <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Laast Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">gender</TableCell>
              <TableCell align="right">Role</TableCell>
              <TableCell align="right">jobTitle</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employeesMobx.employees.map((employee) => (
              <ExpandableTableRow key={employee.id}>
                <TableCell component="th" scope="row">
                  <Avatar
                    alt="Remy Sharp"
                    src={employee.image}
                    className={classes.large}
                  />
                </TableCell>
                <TableCell align="right">{employee.id}</TableCell>
                <TableCell align="right">{employee.firstName}</TableCell>
                <TableCell align="right">{employee.lastName}</TableCell>
                <TableCell align="right">{employee.email}</TableCell>
                <TableCell align="right">{employee.gender}</TableCell>
                <TableCell align="right">{employee.role}</TableCell>
                <TableCell align="right">{employee.jobTitle}</TableCell>
                <TableCell align="right">
                  {" "}
                  <Button
                    variant="contained"
                    color="primary"
                    disableElevation
                    onClick={() => employeesMobx.deleteEmployee(employee.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </ExpandableTableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}
export default observer(Employee);
