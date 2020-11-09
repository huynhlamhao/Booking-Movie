import { creactAction } from ".";
import connector from "../../configs/connector";
import { SET_TOKEN } from "../types/type";

// async action
export const signIn = (data, callBack) => {
   return (dispatch) => {
      connector({
         url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
         method: "POST",
         data,
      })
         .then((res) => {
            console.log("data", res.data);

            dispatch(creactAction(SET_TOKEN, res.data));
            localStorage.setItem("userInfo", JSON.stringify(res.data));
            // luu token vao local
            callBack();
         })
         .catch((err) => {
            console.log(err);
            alert("tài khoản hoặc mật khẩu không đúng");
         });
   };
};
// closure
