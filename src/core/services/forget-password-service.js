import axios from "axios";
import { host } from "../../globals/constants";

export const apiForgetPassSendEmail = (email) => {
  return axios.post(host + "/user/forget-pass/send-email", {
    email,
  });
};
