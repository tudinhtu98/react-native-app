import axios from "axios";
import { host } from "../../globals/constants";

export const apiGetAuthor = (courseId) => {
  return axios.get(
    host + `/instructor`
  );
};