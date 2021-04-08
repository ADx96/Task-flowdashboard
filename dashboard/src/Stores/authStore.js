import { observable, makeAutoObservable } from "mobx";
import axios from "axios";
import instance from "./instance";
import decode from "jwt-decode";
import jwtDecode from "jwt-decode";

class AuthStore {
  user = null;
  constructor() {
    makeAutoObservable(this);
  }

  setUser = (token) => {
    localStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  checkForToken = () => {
    const token = localStorage.getItem("myToken");
    console.log("checkForToken -> token", token);
  };

  signout = () => {
    delete axios.defaults.headers.common.Authorization;
    localStorage.removeItem("myToken");
    this.user = null;
  };

  signin = async (userData, history) => {
    try {
      const res = await instance.post("/signin", userData);
      instance.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
      this.user = jwtDecode(res.data.token);
      history.push("/dashboard");
    } catch (error) {
      console.log("AuthStore -> signin -> error", error);
    }
  };

  signin = async (userData) => {
    try {
      const res = await instance.post("/signin", userData);
      instance.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
      this.user = jwtDecode(res.data.token);
    } catch (error) {
      console.log("AuthStore -> signin -> error", error);
    }
  };

  signup = async (userData) => {
    try {
      const res = await instance.post("/signup", userData);
      this.user = decode(res.data.token);
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };
}

const authStore = new AuthStore();
authStore.checkForToken();

export default authStore;
