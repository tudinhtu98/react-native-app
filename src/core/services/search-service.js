import axios from "axios";
import { host } from "../../globals/constants";

export const apiSearch = (keyword, token, limit = 20, offset = 0) => {
  return axios.post(host + `/course/searchV2`, {
    keyword,
    token,
    limit,
    offset,
    opt: {
      sort: {
        attribute: "createdAt",
        rule: "DESC",
      },
    },
  });
};

export const apiSearchHistory = (token) => {
  return axios.get(host + `/course/search-history`, {
    headers: {
      authorization: "Bearer " + token,
    },
  });
};
