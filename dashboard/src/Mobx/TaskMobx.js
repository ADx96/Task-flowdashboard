import { makeObservable, observable, action } from "mobx";
import axios from "axios";

class TaskMobx {
  tasks = [];

  createTask = async (newTask) => {
    try {
      const res = await axios.post("http://localhost:8000/Task/", newTask);
      this.tasks.push(res.data);
    } catch (error) {
      console.log("log1 -> createHotel -> error", error);
    }
  };
  deleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:8000/Task/${taskId}`);
      this.tasks = this.tasks.filter((task) => task.id !== +taskId);
    } catch (error) {
      console.log("tasks -> deleteEmployee -> error", error);
    }
  };
  fetchTask = async () => {
    try {
      const response = await axios.get("http://localhost:8000/Task");
      this.tasks = response.data;
      console.log(this.tasks);
    } catch (error) {
      console.error("tasks -> fetchProducts -> error", error);
    }
  };

  updatedTask = async (updatedTask) => {
    try {
      await axios.put(
        `http://localhost:8000/Task/${updatedTask.id}`,
        updatedTask
      );
      const task = this.tasks.find((task) => task.id === updatedTask.id);
      for (const key in task) task[key] = updatedTask[key];
    } catch (error) {
      console.log("tasks -> updateEmployee -> error", error);
    }
  };

  constructor() {
    makeObservable(this, {
      tasks: observable,
      deleteTask: action,
      createTask: action,
      updatedTask: action,
      fetchTask: action,
    });
  }
}

const tasksMobx = new TaskMobx();
tasksMobx.fetchTask();

export default tasksMobx;
