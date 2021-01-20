import React, { useState } from "react";

const LanguageContext = React.createContext();

const languages = {
  vietnamese: {
    languageName: "vietnamese",
    changeLanguage: "Change Language",
    changeTheme: "Thay Đổi Giao Diện",
    logout: "Đăng Xuất",
    phone: "Số điện thoại",
    name: "Tên",
    save: "Lưu",
    cancel: "Huỷ",
    updateProfile: "Cập nhật thông tin",
    changePassword: "Thay đổi mật khẩu",
    oldPassword: "Mật khẩu cũ",
    newPassword: "Mật khẩu mới",
    //Home
    continueLearning: "Tiếp Tục Học",
    recommendedForYou: "Đề Xuất Cho Bạn",
    topRate: "Top Đánh Giá",
    topSell: "Top Bán Chạy",
    category: "Danh mục",
    seeAll: "Xem tất cả",
    //Download
    courses: "khoá học",
    sold: "đã bán",
    //Browse
    newReleases: "Mới Phát Hành",
    topAuthors: "Top Tác Giả",
    //Search
    search: "Tìm kiếm",
    recentSearchs: "Tìm kiếm gần đây",
    searchText: "Nhập nội dung tìm kiếm",
    results: "kết quả",
    authors: "Tác giả",
    //Path detail
    authorsRelated: "Tác giả liên quan",
    //Author detail
    skill: "Kỹ năng",
    majorSkill: "Kỹ năng chính",
    totalCourses: "Tổng khoá học",
    introduction: "Giới thiệu",
    //Course detail
    getCourse: "Nhận khoá học",
    like: "Thích",
    share: "Chia sẻ",
    addNewComment: "Thêm Bình Luận",
    listComment: "Danh Sách Bình Luận",
    send: "Gửi",
    //Login
    password: "Mật khẩu",
    login: "ĐĂNG NHẬP",
    forgotPassword: "ĐÃ QUÊN MẬT KHẨU?",
    registerFree: "ĐĂNG KÝ MIỄN PHÍ",
    //Forgot password
    enterYourEmail:
      "Nhập email của bạn và chúng tôi gửi cho bạn đường dẫn để đặt lại mật khẩu của bạn",
    sendEmail: "Gửi Email",
    //Register
    register: "Đăng Ký",
  },
  english: {
    languageName: "english",
    changeLanguage: "Thay đổi ngôn ngữ",
    changeTheme: "Change Theme",
    logout: "Logout",
    phone: "Phone",
    name: "Name",
    save: "Save",
    cancel: "Cancel",
    updateProfile: "Update profile",
    changePassword: "Change password",
    oldPassword: "Old password",
    newPassword: "New password",
    //Home
    continueLearning: "Continue Learning",
    recommendedForYou: "Recommended For You",
    topRate: "Top Rate",
    topSell: "Top Sell",
    category: "Category",
    seeAll: "See all",
    //Download
    courses: "courses",
    sold: "sold",
    //Browse
    newReleases: "New Releases",
    topAuthors: "Top Authors",
    //Search
    search: "Search",
    recentSearchs: "Recent searchs",
    searchText: "Search text",
    results: "results",
    authors: "Authors",
    //Path detail
    authorsRelated: "Authors related",
    //Author detail
    skill: "Skill",
    majorSkill: "Major skill",
    totalCourses: "Total courses",
    introduction: "Introduction",
    //Course detail
    getCourse: "Get Course",
    like: "Like",
    share: "Share",
    addNewComment: "Add New Comment",
    listComment: "List Commnent",
    send: "Send",
    //Login
    password: "Password",
    login: "LOGIN",
    forgotPassword: "FORGOT PASSWORD?",
    registerFree: "REGISTER FREE",
    //Forgot password
    enterYourEmail:
      "Enter your email address and we'll send you a link to reset your password",
    sendEmail: "Send Email",
    //Register
    register: "Register",
  },
};

const LanguageProvider = (props) => {
  const [language, setLanguage] = useState(languages.english);

  const toggleLanguage = () => {
    if (language == languages.vietnamese) {
      setLanguage(languages.english);
    } else {
      setLanguage(languages.vietnamese);
    }
  };
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export { LanguageProvider, LanguageContext };
