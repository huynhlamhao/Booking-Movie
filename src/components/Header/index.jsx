import React, { Component } from "react";
import classes from "./style.module.css";
import "./style.css";
import { Link, NavLink } from "react-router-dom";
class index extends Component {
   render() {
      return (
         <div id="header" className={classes.head}>
            <nav className="navbar navbar-expand-sm navbar-light">
               <NavLink to="/" className="navbar-brand" href="./">
                  <img
                     src="https://i.imgur.com/lC22izJ.png"
                     width="50px"
                     alt=""
                  />
               </NavLink>
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
                        <NavLink className="nav-link" to="/" href="#header">
                           Trang Chủ
                        </NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink className="nav-link" to="/" href="#showing">
                           Lịch Chiếu
                        </NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink className="nav-link" to="/" href="#cinema">
                           Cụm rạp
                        </NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink className="nav-link" to="/" href="#news">
                           Tin tức
                        </NavLink>
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
