import React, { Component } from "react";

import "./style.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class index extends Component {
   constructor(props) {
      super(props);
      this.state = {
         user: null,
         idScroll: "",
      };
   }
   handleScroll = (id) => {
      const page = document.getElementById(id);
      if (page) {
         page.scrollIntoView({ behavior: "smooth" });
      }
   };
   handleLogout = () => {
      this.setState({
         ...this.state.user,
         user: localStorage.removeItem("userInfo"),
      });
   };
   render() {
      // console.log("User", this.props.user);

      // const token = JSON.parse(localStorage.getItem("userInfo"));
      return (
         <div id="header" className="head">
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
                     className={`navbar-nav mr-auto ml-auto mt-2 mt-lg-0  navBar `}
                  >
                     <li className="nav-item active">
                        <NavLink
                           className="nav-link text-danger font-weight-bold"
                           to="/"
                           href="#header"
                        >
                           Trang Chủ
                        </NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink
                           className="nav-link text-danger font-weight-bold"
                           to="/"
                           onClick={() => {
                              this.handleScroll("showing");
                           }}
                        >
                           Lịch Chiếu
                        </NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink
                           className="nav-link text-danger font-weight-bold"
                           to="/"
                           onClick={() => {
                              this.handleScroll("cinema");
                           }}
                        >
                           Cụm rạp
                        </NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink
                           className="nav-link text-danger font-weight-bold"
                           to="/"
                           href="#news"
                        >
                           Tin tức
                        </NavLink>
                     </li>
                  </ul>
                  {this.state.user ? (
                     <div className="account">
                        <p className="text-info m-0">
                           {this.state.user.taiKhoan}
                           <i className="fas fa-user"></i>
                        </p>
                        <button
                           onClick={this.handleLogout}
                           className="btn btn-danger logout"
                        >
                           Đăng xuất
                        </button>
                     </div>
                  ) : (
                     <NavLink to="/signin" className="m-4 text-danger">
                        Đăng nhập <i className="fas fa-user"></i>
                     </NavLink>
                  )}
               </div>
            </nav>
         </div>
      );
   }
   componentDidMount() {
      const token = JSON.parse(localStorage.getItem("userInfo"));
      console.log(token);
      if (token) {
         console.log("logged");
         this.setState({ isLogin: true, user: token });
      }

      // if (token) {
      //    // console.log("hahaha");
      //    this.props.dispatch(creactAction(SET_TOKEN, token));
      // }
   }
}
const mapStateToProps = (state) => {
   return {
      user: state.auth.user,
   };
};
export default connect(mapStateToProps)(index);
