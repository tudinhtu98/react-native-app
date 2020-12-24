import axios from "axios";
import { host } from "../../globals/constants";

export const apiGetProcessCourse = (token) => {
  return axios.get(host + `/user/get-process-courses`, {
    headers: {
      authorization: "Bearer " + token,
    },
  });
};
