import axios from "axios";
import { host } from "../../globals/constants";

export const apiGetCourseDetail = (courseId) => {
  return axios.get(
    host + `/course/get-course-detail/${courseId}/null`
  );
};