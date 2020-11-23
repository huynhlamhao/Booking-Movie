import React, { Component } from "react";
import { connect } from "react-redux";
import UserItem from "../UserItem";
class index extends Component {
   render() {
      return (
         <div className="">
            <table className="table table-hover text-center">
               <thead>
                  <tr>
                     <th scope="col">Tên</th>
                     <th scope="col">Tài Khoản</th>
                     <th scope="col">Email</th>
                     <th scope="col">Số điện thoại</th>
                     <th scope="col">Mã nhóm</th>
                     <th scope="col">Mã người dùng</th>
                     <th scope="col">Hành Động</th>
                  </tr>
               </thead>
               <tbody>
                  {this.props.userListItem.map((item, index) => {
                     return <UserItem item={item} key={index} />;
                  })}
               </tbody>
            </table>
         </div>
      );
   }
}
const mapStateToProps = (state) => {
   return {
      userListItem: state.userManager.userListItem,
   };
};
export default connect(mapStateToProps)(index);
