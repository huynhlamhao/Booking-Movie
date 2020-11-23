import React, { Component } from "react";
import { connect } from "react-redux";

import UserItem from "../UserItem";

class index extends Component {
   constructor() {
      super();
      this.state = {
         currentPage: 1,
         usersPerPage: 10,
      };
   }
   chosePage = (event) => {
      console.log("state:", this.state.currentPage);

      this.setState({
         currentPage: Number(event.target.id),
      });
   };
   chosePageNextPrev = (ps) => {
      if (ps === "next") {
         // console.log(this.state.currentPage);
         this.setState({
            currentPage: this.state.currentPage + 1,
         });
      } else {
         // console.log(this.state.currentPage);
         this.setState({
            currentPage: this.state.currentPage - 1,
         });
      }
   };
   select = (event) => {
      this.setState({
         usersPerPage: event.target.value,
      });
   };

   render() {
      const currentPage = this.state.currentPage;
      const usersPerPage = this.state.usersPerPage;
      const indexOfLastNews = currentPage * usersPerPage;
      const indexOfFirstNews = indexOfLastNews - usersPerPage;

      const currentTodos = this.props.item.slice(
         indexOfFirstNews,
         indexOfLastNews
      );

      const renderTodos = () => {
         // console.log("currentTodos", currentTodos);

         return currentTodos.map((item, index) => {
            return (
               <UserItem
                  stt={index + 1 + (currentPage - 1) * usersPerPage}
                  key={index}
                  data={item}
               />
            );
         });
      };

      const pageNumbers = [];
      for (
         let i = 1;
         i <= Math.ceil(this.props.item.length / usersPerPage);
         i++
      ) {
         pageNumbers.push(i);
      }
      return (
         <div className="">
            <table className="table table-hover text-center">
               <thead>
                  <tr>
                     <th scope="col">Tên</th>
                     <th scope="col">Tài Khoản</th>
                     <th scope="col">Email</th>
                     <th scope="col">Số điện thoại</th>

                     <th scope="col">Mã người dùng</th>
                     <th scope="col">Hành Động</th>
                  </tr>
               </thead>
               <tbody>{renderTodos()}</tbody>
            </table>
            <div className="table-responsive">
               <ul className="pagination ">
                  {this.state.currentPage === 1 ? (
                     <li className={`page-item disabled`}>
                        <a
                           className="page-link"
                           href
                           tabIndex={-1}
                           aria-disabled="true"
                        >
                           Previous
                        </a>
                     </li>
                  ) : (
                     <li
                        className={`page-item`}
                        onClick={() => {
                           this.chosePageNextPrev("prev");
                        }}
                     >
                        <a
                           className="page-link"
                           href
                           tabIndex={-1}
                           aria-disabled="true"
                        >
                           Previous
                        </a>
                     </li>
                  )}
                  {pageNumbers.slice(0, 3).map((number) => {
                     return this.state.currentPage === number ? (
                        <li
                           onClick={this.chosePage}
                           key={number}
                           id={number}
                           className="page-item active"
                        >
                           <a
                              id={number}
                              onClick={this.chosePage}
                              className="page-link"
                              href
                           >
                              {number}
                           </a>
                        </li>
                     ) : (
                        <li
                           className="page-item"
                           key={number}
                           id={number}
                           onClick={this.chosePage}
                        >
                           <a
                              id={number}
                              onClick={this.chosePage}
                              className="page-link"
                              href
                           >
                              {number}
                           </a>
                        </li>
                     );
                  })}
                  {this.state.currentPage >= 4 &&
                  this.state.currentPage <= 80 ? (
                     <li
                        onClick={this.chosePage}
                        id={this.state.currentPage}
                        className="page-item active"
                     >
                        <a
                           id={this.state.currentPage}
                           onClick={this.chosePage}
                           className="page-link"
                           href
                        >
                           {this.state.currentPage}
                        </a>
                     </li>
                  ) : (
                     <li
                        onClick={this.chosePage}
                        id={this.state.currentPage}
                        className="page-item"
                     >
                        <a
                           id={this.state.currentPage}
                           onClick={this.chosePage}
                           className="page-link"
                           href
                        >
                           4
                        </a>
                     </li>
                  )}
                  <li className="page-item">
                     <a className="page-link" href>
                        ...
                     </a>
                  </li>
                  {this.state.currentPage <= 80 ? (
                     <li
                        onClick={this.chosePage}
                        id={this.state.currentPage}
                        className="page-item"
                     >
                        <a
                           id={this.state.currentPage + 10}
                           onClick={this.chosePage}
                           className="page-link"
                           href
                        >
                           {this.state.currentPage + 10}
                        </a>
                     </li>
                  ) : (
                     <li
                        onClick={this.chosePage}
                        id={this.state.currentPage}
                        className="page-item"
                     >
                        <a
                           id={this.state.currentPage - 10}
                           onClick={this.chosePage}
                           className="page-link"
                           href
                        >
                           {this.state.currentPage - 10}
                        </a>
                     </li>
                  )}
                  <li className="page-item">
                     <a className="page-link" href>
                        ...
                     </a>
                  </li>
                  {pageNumbers.slice(80, pageNumbers.length).map((number) => {
                     return this.state.currentPage === number ? (
                        <li
                           className="page-item active"
                           key={number}
                           id={number}
                           onClick={this.chosePage}
                        >
                           <a
                              id={number}
                              onClick={this.chosePage}
                              className="page-link"
                              href
                           >
                              {number}
                           </a>
                        </li>
                     ) : (
                        <li
                           className="page-item "
                           key={number}
                           id={number}
                           onClick={this.chosePage}
                        >
                           <a
                              id={number}
                              onClick={this.chosePage}
                              className="page-link"
                              href
                           >
                              {number}
                           </a>
                        </li>
                     );
                  })}
                  {this.state.currentPage ===
                  this.props.item.length / usersPerPage ? (
                     <li className={`page-item disabled`}>
                        <a className="page-link" href>
                           Next
                        </a>
                     </li>
                  ) : (
                     <li
                        className={`page-item`}
                        onClick={() => {
                           this.chosePageNextPrev("next");
                           console.log("click", this.state.currentPage);
                           // console.log(
                           //    "length",
                           //    this.props.item.length / usersPerPage - 1
                           // );
                        }}
                     >
                        <a className="page-link" href>
                           Next
                        </a>
                     </li>
                  )}
                  {console.log(this.props.item.length / usersPerPage)}
               </ul>
            </div>
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
