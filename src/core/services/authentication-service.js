import axios from "axios";
import { host } from "../../globals/constants";

export const apiLogin = (email, password) => {
  return axios.post(host + "/user/login", {
    email,
    password,
  });
};
