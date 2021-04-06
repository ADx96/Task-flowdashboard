import ResponsiveDrawer from "./Components/Drawers";
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddEmployee from "./Pages/AddEmployee";
import Employees from "./Pages/Employees";
import MangaeTasks from "./Pages/ManageTasks";
import Chart from "./Pages/Analytics";

function App() {
  return (
    <div className="App">
      <Router>
        <ResponsiveDrawer />
        <Switch>
          <Route path="/" exact component={Employees} />
          <Route path="/AddEmployees" exact component={AddEmployee} />
          <Route path="/MangaeTasks" exact component={MangaeTasks} />
          <Route path="/Analytics" exact component={Chart} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
