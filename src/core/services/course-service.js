import axios from "axios";
import { host } from "../../globals/constants";

export const apiGetCourseDetail = (courseId) => {
  return axios.get(host + `/course/get-course-detail/${courseId}/null`);
};
export const apiLikeCourse = (token, courseId) => {
  return axios.post(
    host + `/user/like-course`,
    {
      courseId,
    },
    {
      headers: {
        authorization: "Bearer " + token,
      },
    }
  );
};
export const apiGetCourseLikeStatus = (token, courseId) => {
  return axios.get(host + `/user/get-course-like-status/${courseId}`, {
    headers: {
      authorization: "Bearer " + token,
    },
  });
};
