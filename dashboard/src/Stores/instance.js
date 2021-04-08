import axios from "axios";

const instance = axios.create({
  baseURL: "https://taskflow-rce5b.ondigitalocean.app ",
});

export default instance;
