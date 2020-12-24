import axios from "axios";
import { host } from "../../globals/constants";

export const apiGetAuthor = () => {
  return axios.get(host + `/instructor`);
};
export const apiGetAuthorDetail = (authorId) => {
  return axios.get(host + `/instructor/detail/${authorId}`);
};
