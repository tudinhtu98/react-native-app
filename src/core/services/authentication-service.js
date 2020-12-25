import axios from "axios";
import { host } from "../../globals/constants";

export const apiLogin = (email, password) => {
  return axios.post(host + "/user/login", {
    email,
    password,
  });
};

export const apiChangeInfo = (name, phone, token) => {
  return axios.put(
    host + "/user/update-profile",
    {
      name,
      phone,
    },
    {
      headers: {
        authorization: "Bearer " + token,
      },
    }
  );
};

export const apiChangePassword = (oldPass, newPass, userId, token) => {
  return axios.post(
    host + "/user/change-password",
    {
      id: userId,
      oldPass,
      newPass,
    },
    {
      headers: {
        authorization: "Bearer " + token,
      },
    }
  );
};

export const apiGetMe = (token) => {
  return axios.get(host + "/user/me", {
    headers: {
      authorization: "Bearer " + token,
    },
  });
};
