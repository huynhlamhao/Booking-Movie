import connector from "../../configs/connector";

// async action
export const signUp = (values, callBack) => {
   return connector({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      method: "POST",
      data: values,
   })
      .then((res) => {
         // console.log("data", res);
         callBack();
      })
      .catch((err) => {
         console.log(err);
         alert("tài khoản hoặc email đã tồn tại");
      });
};
// closure
