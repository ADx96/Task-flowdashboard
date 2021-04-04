import ResponsiveDrawer from "./Components/Drawers";
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddEmployee from "./Pages/AddEmployee";
import Employees from "./Pages/Employees";
import MangaeTasks from "./Pages/ManageTasks";

function App() {
  return (
    <div className="App">
      <Router>
        <ResponsiveDrawer />
        <Switch>
          <Route path="/" exact component={AddEmployee} />
          <Route path="/Employees" exact component={Employees} />
          <Route path="/MangaeTasks" exact component={MangaeTasks} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
