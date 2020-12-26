import axios from "axios";
import { host } from "../../globals/constants";

export const apiGetTopSellCourse = (limit = 10, page = 1) => {
  return axios.post(host + `/course/top-sell`, {
    limit,
    page,
  });
};
