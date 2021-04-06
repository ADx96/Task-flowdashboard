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
import Avatar from "@material-ui/core/Avatar";

// import "../App.css";
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
              <TableCell align="right">Emplyee ID</TableCell>
              <TableCell align="right">Employee name</TableCell>
              <TableCell align="right">Task Name</TableCell>
              <TableCell align="right">Task ID</TableCell>
              <TableCell align="right">Direct Supervisor</TableCell>
              <TableCell align="right">Mobile</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableCell className="userInfo" style={{ marginLeft: "504%" }}>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                className={classes.large}
              />
            </TableCell>

            <TableCell align="right">ay shai</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right">
              {" "}
              <Button
                variant="contained"
                color="primary"
                disableElevation
                // onClick={() => hotelsStore.deleteHotel(hotel.id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}
export default observer(Employee);
