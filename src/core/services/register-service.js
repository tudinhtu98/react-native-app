import axios from "axios";
import { host } from "../../globals/constants";

export const apiRegister = (email, phone, password) => {
  return axios.post(host + "/user/register", {
    email,
    phone,
    password,
  });
};
export const apiSendActiveEmail = (email) => {
  return axios.post(host + "/user/send-activate-email", {
    email,
  });
};
