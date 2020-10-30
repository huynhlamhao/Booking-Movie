import { SET_MOVIE } from "../types/type";
import { creactAction } from ".";
import connector from "../../configs/connector";
// create async action
export const fetchMoives = (dispatch) => {
   connector({
      url:
         "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
   })
      .then((res) => {
         dispatch(creactAction(SET_MOVIE, res.data));
      })
      .catch((err) => {
         console.log(err);
      });
};
