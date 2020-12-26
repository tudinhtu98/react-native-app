import axios from "axios";
import { host } from "../../globals/constants";

export const apiRegister = (email, phone, password) => {
  return axios.post(host + "/user/register", {
    email,
    phone,
    password,
  });
};
