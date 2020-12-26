import axios from "axios";
import { host } from "../../globals/constants";

export const apiGetRecommendCourse = (userId,limit, offset) => {
  return axios.get(
    host + `/user/recommend-course/${userId}/${limit}/${offset}`
  );
};
