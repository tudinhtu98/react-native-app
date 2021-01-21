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

export const apiAddComment = (token, courseId, point, content) => {
  return axios.post(
    host + `/course/rating-course`,
    {
      courseId,
      formalityPoint: point.toString(),
      contentPoint: point.toString(),
      presentationPoint: point.toString(),
      content,
    },
    {
      headers: {
        authorization: "Bearer " + token,
      },
    }
  );
};

export const apiCheckOwnCourseStatus = (token, courseId) => {
  return axios.get(host + `/user/check-own-course/${courseId}`, {
    headers: {
      authorization: "Bearer " + token,
    },
  });
};
export const apiAddCourse = (token, courseId) => {
  return axios.post(
    host + `/payment/get-free-courses`,
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
