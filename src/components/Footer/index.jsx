import React, { Component } from "react";
import "./style.css";
class index extends Component {
   render() {
      return (
         <div id="footer" className="footer">
            <div className="container">
               <div className="row hrline">
                  <div className="col-sm-4 col-xs-12">
                     <p className="footerTitle">Tix</p>
                     <div className="footerList">
                        <ul className="w-50">
                           <li>
                              <a href="#footer">FAQ</a>
                           </li>
                           <li>
                              <a href="#footer">Brand Guidlines</a>
                           </li>
                        </ul>
                        <ul className="w-50">
                           <li>
                              <a href="#footer">Thỏa thuận sử dụng</a>
                           </li>
                           <li>
                              <a href="#footer">Chính sách bảo mật</a>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-sm-4 col-xs-12">
                     <p className="footerTitle">Đối tác</p>
                     <div className="row col-sm-12">
                        <a href="https://www.cgv.vn/">
                           <img
                              src="https://tix.vn/app/assets/img/icons/cgv.png"
                              alt="cgvlogo"
                              className="iconConnect"
                           />
                        </a>
                        <a href="https://www.bhdstar.vn/">
                           <img
                              src="https://tix.vn/app/assets/img/icons/bhd.png"
                              alt="bhdlogo"
                              className="iconConnect"
                           />
                        </a>{" "}
                        <a href="https://www.galaxycine.vn/">
                           <img
                              src="https://tix.vn/app/assets/img/icons/galaxycine.png"
                              alt="galaxycinelogo"
                              className="iconConnect"
                           />
                        </a>{" "}
                        <a href="http://cinestar.com.vn/">
                           <img
                              src="https://tix.vn/app/assets/img/icons/cinestar.png"
                              alt="cinestarlogo"
                              className="iconConnect"
                           />
                        </a>{" "}
                        <a href="http://lottecinemavn.com/LCHS/index.aspx">
                           <img
                              src="https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png"
                              alt=""
                              className="iconConnect"
                           />
                        </a>
                        <a href="https://www.megagscinemas.vn/">
                           <img
                              src="https://tix.vn/app/assets/img/icons/megags.png"
                              alt=""
                              className="iconConnect"
                           />
                        </a>{" "}
                        <a href="https://www.betacineplex.vn/home.htm">
                           <img
                              src="https://tix.vn/app/assets/img/icons/bt.jpg"
                              alt=""
                              className="iconConnect"
                           />
                        </a>{" "}
                        <a href="http://ddcinema.vn/">
                           <img
                              src="https://tix.vn/app/assets/img/icons/dongdacinema.png"
                              alt=""
                              className="iconConnect"
                           />
                        </a>{" "}
                     </div>
                  </div>
                  <div className="col-sm-2 col-xs-6">
                     <p className="footerTitle">Mobile App</p>
                     <a href="#footer">
                        <img
                           src="https://tix.vn/app/assets/img/icons/apple-logo.png"
                           alt="apple-logo"
                           className="vslogo"
                        />
                     </a>
                     <a href="#footer">
                        <img
                           src="https://tix.vn/app/assets/img/icons/android-logo.png"
                           alt="android-logo"
                           className="vslogo"
                        />
                     </a>
                  </div>
                  <div className="col-sm-2 col-xs-6">
                     <p className="footerTitle">Social</p>
                     <a href="#footer">
                        <img
                           src="https://tix.vn/app/assets/img/icons/facebook-logo.png"
                           alt="apple-logo"
                           className="vslogo"
                        />
                     </a>
                     <a href="#footer">
                        <img
                           src="https://tix.vn/app/assets/img/icons/zalo-logo.png"
                           alt="android-logo"
                           className="vslogo"
                        />
                     </a>
                  </div>
               </div>
               <hr />
               <div className="row">
                  <div className=" col-sm-3 licenseLogo">
                     <img
                        src="https://tix.vn/app/assets/img/icons/zion-logo.jpg"
                        alt=""
                     />
                  </div>
                  <div className="col-sm-6 text-light">
                     <h6>
                        TIX –Dự án cuối khóa Lập trình Frontend
                        [CYBERFOT-ACADEMY]
                     </h6>
                     <p>Người thực hiện : Huỳnh Lâm Hào</p>
                     <p>Số Điện Thoại (Hotline): 0328 64 54 54</p>
                     <p>
                        Email:{" "}
                        <span className="text-danger">
                           <a
                              className="text-decoration-none text-danger"
                              href="https://mail.google.com/"
                           >
                              huynhlamhao0188@gmail.com
                           </a>
                        </span>
                     </p>
                  </div>
                  <div className="col-sm-3">
                     <a
                        target="_blank"
                        href="http://online.gov.vn/Home/WebDetails/62782?AspxAutoDetectCookieSupport=1 "
                     >
                        <img
                           src="https://s3img.vcdn.vn/123phim/2020/03/d1e6bd560daa9e20131ea8a0f62e87f8.png"
                           alt="alert"
                           width="150px"
                           height="50px"
                        />
                     </a>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default index;
