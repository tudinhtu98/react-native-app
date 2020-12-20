export const login = (email, password) => {
  if (email === "Admin") {
    if (password === "123") {
      return {
        status: 200,
        user: { username: "Admin", fullname: "Tu Đình Tư" },
      };
    } else {
      return {
        status: 404,
        errorString: "Email or password are not match!",
      };
    }
  }
  return {
    status: 404,
    errorString: "Email is not existed!",
  };
};
