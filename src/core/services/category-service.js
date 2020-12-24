import axios from "axios";
import { host } from "../../globals/constants";

export const apiGetCategory = () => {
  return axios.get(host + `/category/all`);
};

export const apiGetCourseByCategoryId = (
  token,
  categoryId,
  limit = 10,
  offset = 0
) => {
  return axios.post(host + `/course/searchV2`, {
    token,
    keyword: "",
    limit,
    offset,
    opt: {
      sort: {
        attribute: "createdAt",
        rule: "DESC",
      },
      category: [categoryId],
    },
  });
};
