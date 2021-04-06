import { observable, makeAutoObservable } from "mobx";
import axios from "axios";
import instance from "./instance";
import decode from "jwt-decode";

class AuthStore {
  user = null;
  constructor() {
    makeAutoObservable(this);
  }
}
signin = async (userData) => {
  try {
    const res = await instance.post("/signin", userData);
    this.user = decode(res.data.token);
  } catch (error) {
    console.log("AuthStore -> signin -> error", error);
  }
};
const authStore = new AuthStore();

export default authStore;
