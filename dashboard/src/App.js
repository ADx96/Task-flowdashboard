import ResponsiveDrawer from "./Components/Drawers";
import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import AddEmployee from "./Pages/AddEmployee";
import Employees from "./Pages/Employees";
import MangaeTasks from "./Pages/ManageTasks";
import Chart from "./Pages/Analytics";
import SignIn from "./Components/Signin";
const App = ({ location }) => {
  return (
    <div className="App">
      <Router>
        {location.pathname !== "/" && <ResponsiveDrawer />}
        <Switch>
          <Route path="/" exact component={SignIn} />

          <Route path="/Dashboard" exact component={Employees} />
          <Route path="/AddEmployees" exact component={AddEmployee} />
          <Route path="/MangaeTasks" exact component={MangaeTasks} />
          <Route path="/Analytics" exact component={Chart} />
        </Switch>
      </Router>
    </div>
  );
};

export default withRouter(App);
