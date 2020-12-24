import axios from "axios";
import { host } from "../../globals/constants";

export const apiGetFavoriteCourse = (token) => {
  return axios.get(host + `/user/get-favorite-courses`, {
    headers: {
      authorization: "Bearer " + token,
    },
  });
};
