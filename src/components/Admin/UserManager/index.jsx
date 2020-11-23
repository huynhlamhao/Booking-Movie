import React, { Component } from "react";
import LazyLoad from "react-lazyload";
import { connect } from "react-redux";
import { fetchUserList } from "../../../redux/actions/userList";
import UserList from "./UserList";
import Search from "./Search";
import ModalAddUser from "./ModalAddUser";
class index extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isLoading: false,
         currentPage: 1,
      };
   }
   handleLazy() {
      return new Promise((resolve) => {
         setTimeout(() => resolve(this.setState({ isLoading: true })), 1000);
      });
   }
   handleAddUser = () => {
      const action = {
         type: "SHOW_MODAL",
      };
      this.props.dispatch(action);
   };
   render() {
      return this.state.isLoading ? (
         <div className="container-fluid px-5">
            <h1 className="display-4 text-center my-3">Quản lý người dùng</h1>
            <div className="d-flex justify-content-between align-items-center">
               <Search></Search>
               <button onClick={this.handleAddUser} className="btn btn-success">
                  Thêm người dùng
               </button>
            </div>
            <UserList></UserList>
            <ul className="pagination justify-content-center">
               <li className="page-item disabled">
                  <a
                     className="page-link"
                     href="true"
                     tabIndex={-1}
                     aria-disabled="true"
                  >
                     Previous
                  </a>
               </li>
               <li className="page-item active">
                  <a className="page-link" href="true">
                     1
                  </a>
               </li>
               <li className="page-item">
                  <a
                     className="btn page-link"
                     href="true"
                     onClick={() => {
                        this.setState({ currentPage: 2 });
                        this.props.dispatch(
                           fetchUserList(this.state.currentPage)
                        );
                     }}
                  >
                     2
                  </a>
               </li>
               <li className="page-item">
                  <a className="page-link" href="true">
                     3
                  </a>
               </li>
               <li className="page-item">
                  <a className="page-link" href="true">
                     Next
                  </a>
               </li>
            </ul>

            {this.props.isShow && <ModalAddUser />}
         </div>
      ) : (
         <LazyLoad></LazyLoad>
      );
   }
   componentDidMount = () => {
      this.props.dispatch(fetchUserList(1));
      this.handleLazy();
   };
}
const mapStateToProps = (state) => {
   return {
      isShow: state.modal,
      userList: state.userManager.userList,
   };
};
export default connect(mapStateToProps)(index);
