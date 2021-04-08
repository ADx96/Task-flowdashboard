import { makeObservable, observable, action } from "mobx";
import axios from "axios";
import instance from "../Stores/instance";

class EmployeeMobx {
  employees = [];

  createEmployee = async (newEmployee) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/Employee/",
        newEmployee
      );
      this.employees.push(res.data);
    } catch (error) {
      console.log("log1 -> createHotel -> error", error);
    }
  };
  deleteEmployee = async (employeeId) => {
    try {
      await axios.delete(`http://localhost:8000/Employee/${employeeId}`);
      this.employees = this.employees.filter(
        (employee) => employee.id !== +employeeId
      );
    } catch (error) {
      console.log("employees -> deleteEmployee -> error", error);
    }
  };
  fetchEmployee = async () => {
    try {
      const response = await instance.get("/Employee");
      this.employees = response.data;
      console.log(this.employees);
    } catch (error) {
      console.error("employees -> fetchProducts -> error", error);
    }
  };

  updatedEmployee = async (updatedEmployee) => {
    try {
      await axios.put(
        `http://localhost:8000/Employee/${updatedEmployee.id}`,
        updatedEmployee
      );
      const employee = this.employees.find(
        (employee) => employee.id === updatedEmployee.id
      );
      for (const key in employee) employee[key] = updatedEmployee[key];
    } catch (error) {
      console.log("Employees -> updateEmployee -> error", error);
    }
  };

  constructor() {
    makeObservable(this, {
      employees: observable,
      deleteEmployee: action,
      createEmployee: action,
      updatedEmployee: action,
      fetchEmployee: action,
    });
  }
}

const employeesMobx = new EmployeeMobx();
employeesMobx.fetchEmployee();

export default employeesMobx;
