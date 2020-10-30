import React, { Component } from "react";
import classes from "./style.module.css";
import "./style.css";
class index extends Component {
   render() {
      return (
         <div id="header" className={classes.head}>
            <nav className="navbar navbar-expand-sm navbar-light">
               <a className="navbar-brand" href="./">
                  <img
                     src="https://i.imgur.com/lC22izJ.png"
                     width="50px"
                     alt=""
                  />
               </a>
               <button
                  className="navbar-toggler d-lg-none"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapsibleNavId"
                  aria-controls="collapsibleNavId"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
               >
                  <span className="navbar-toggler-icon" />
               </button>
               <div className="collapse navbar-collapse" id="collapsibleNavId">
                  <ul
                     className={`navbar-nav mr-auto ml-auto mt-2 mt-lg-0  ${classes.navBar} `}
                  >
                     <li className="nav-item active">
                        <a className="nav-link" href="#header">
                           Trang Chủ
                        </a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#showing">
                           Lịch Chiếu
                        </a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#cinema">
                           Cụm rạp
                        </a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#news">
                           Tin tức
                        </a>
                     </li>
                  </ul>
                  <a href="/" className="m-4 text-danger">
                     <i className="fas fa-user"></i>
                  </a>
               </div>
            </nav>
         </div>
      );
   }
}

export default index;
