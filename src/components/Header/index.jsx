import React, { Component } from "react";
import classes from "./style.module.css";
import "./style.css";
class index extends Component {
   render() {
      return (
         <div className={classes.head}>
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
                        <a className="nav-link" href="./">
                           Trang Chủ
                        </a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#showing">
                           Lịch Chiếu
                        </a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="./">
                           Cụm rạp
                        </a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="./">
                           Tin tức
                        </a>
                     </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0">
                     <input
                        className="form-control mr-sm-2 "
                        type="text"
                        placeholder="Search"
                     />

                     <a href="/" className="ml-4 text-danger">
                        <i className="fas fa-user"></i>
                     </a>
                  </form>
               </div>
            </nav>
         </div>
      );
   }
}

export default index;
