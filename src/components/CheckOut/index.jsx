import React, { Component } from "react";
import { connect } from "react-redux";
import LazyLoad from "../LazyLoad";
import ShowChair from "./ShowChair";
import { bookingTicket } from "../../redux/actions/bookingTicket";
import Swal from "sweetalert2";

import "./style.css";

class index extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isLoading: false,
      };
   }
   // điều khiển loading
   handleLazy() {
      return new Promise((resolve) => {
         setTimeout(() => resolve(this.setState({ isLoading: true })), 2000);
      });
   }
   // render danh sách ghế
   renderChairList = () => {
      let vipArr = this.props.checkoutInfo.danhSachGhe.filter((item) => {
         return item.loaiGhe === "Vip";
      });
      let nomalArr = this.props.checkoutInfo.danhSachGhe.filter((item) => {
         return item.loaiGhe === "Thuong";
      });
      return (
         <div className="container">
            <ShowChair
               vipArr={vipArr}
               nomalArr={nomalArr}
               index={index}
               key={index}
            ></ShowChair>
         </div>
      );
   };
   // đặt vé
   handleBookingTicket = () => {
      this.props.dispatch(
         bookingTicket(this.props.ticket, () => {
            Swal.fire({
               title: "Đặt vé thành công! Bạn có muốn về trang chủ?",
               icon: "success",
               showCancelButton: true,
               confirmButtonColor: "#3085d6",
               cancelButtonColor: "#d33",
               confirmButtonText: "Về trang chủ",
            }).then((result) => {
               if (result.isConfirmed) {
                  window.location.href = "/";
               } else {
                  window.location.reload();
               }
            });
         })
      );
   };
   render() {
      let totalCount = 0;
      this.props.selectedChair.map((item) => {
         return (totalCount += item.giaVe);
      });
      const formatter = new Intl.NumberFormat("vn-VN");
      const { email, soDT } = JSON.parse(localStorage.getItem("userInfo"));

      const { thongTinPhim, danhSachGhe } = this.props.checkoutInfo;
      //   console.log(danhSachGhe);
      return thongTinPhim && danhSachGhe && this.state.isLoading ? (
         <div className="row checkout  m-0">
            <div className="col-md-9 col-sm-12">
               <div className="text-center py-4">
                  <h5>{thongTinPhim.tenCumRap}</h5>
                  <span> {thongTinPhim.tenRap} </span>&ensp;|&ensp;
                  <span>{thongTinPhim.gioChieu}</span>
                  <img
                     src="https://tix.vn/app/assets/img/icons/screen.png"
                     alt=""
                     width="100%"
                  />
               </div>

               <div>{this.renderChairList()}</div>
               <div className="row justify-content-center my-3">
                  <button className="text-secondary btn chairInfo">
                     <i className="fas fa-couch"></i>:Ghế đã đặt
                  </button>
                  <button className="text-success btn chairInfo">
                     <i className="fas fa-couch"></i>:Ghế đang chọn
                  </button>
                  <button className="text-warning btn chairInfo">
                     <i className="fas fa-couch"></i>:Ghế vip
                  </button>
                  <button className="text-primary btn chairInfo">
                     <i className="fas fa-couch"></i>:Ghế thường
                  </button>
               </div>
            </div>
            <div className="col-md-3 col-sm-12 border p-0">
               <div className="ticket">
                  <div className="ticketTotal">
                     <h2 className="text-success">
                        {formatter.format(totalCount)}đ
                     </h2>
                  </div>
                  <div className="ticketInfo">
                     <div
                        className="w-50 "
                        style={{ display: "grid", justifyItems: "center" }}
                     >
                        <h6 className="text-dark">
                           <span className="badge badge-danger mr-2">C18</span>
                           {thongTinPhim.tenPhim}
                        </h6>
                        | <h6>{thongTinPhim.tenCumRap}</h6>|
                        <span>{thongTinPhim.ngayChieu}</span>|
                        <span>{thongTinPhim.gioChieu}</span>|
                        <span>
                           {" "}
                           <strong>{thongTinPhim.tenRap}</strong>{" "}
                        </span>
                     </div>
                     <div className="w-50">
                        <img
                           src={thongTinPhim.hinhAnh}
                           alt={thongTinPhim.tenPhim}
                           width="100%"
                           height="250px"
                        />
                     </div>
                  </div>
                  <div className="ticketChair">
                     <p>
                        Ghế:&ensp;
                        {this.props.selectedChair.map((item, index) => {
                           return (
                              <span key={index}>
                                 <strong>{item.stt}</strong>({item.loaiGhe})
                              </span>
                           );
                        })}
                     </p>
                  </div>
                  <div className="accountInfo ">
                     <p>
                        Email: <strong>{email}</strong>
                     </p>
                  </div>
                  <div className="accountInfo ">
                     <p>
                        Phone: <strong>{soDT}</strong>
                     </p>
                  </div>
                  <div className="ticketRefund">
                     <img
                        src="https://tix.vn/app/assets/img/icons/exclamation.png"
                        alt=""
                        width="30px"
                        height="30px"
                     />
                     <span>
                        {" "}
                        Vé đã mua không thể đổi hoặc hoàn tiền Mã vé sẽ được gửi
                        qua tin nhắn ZMS (tin nhắn Zalo) và Email đã nhập.
                     </span>
                  </div>
                  {this.props.selectedChair.length !== 0 ? (
                     <button
                        className="btn  datve datve--left"
                        onClick={this.handleBookingTicket}
                        type="button"
                     >
                        Đặt vé
                     </button>
                  ) : (
                     <button className="btn  datve  disabled">Đặt vé</button>
                  )}{" "}
               </div>
            </div>
         </div>
      ) : (
         <LazyLoad></LazyLoad>
      );
   }
   componentDidMount() {
      this.handleLazy();
   }
}
const mapStateToProps = (state) => {
   return {
      logo: state.cinema.cinemaSystemLogo,
      checkoutInfo: state.checkout.checkoutInfo,
      selectedChair: state.checkout.selectedChair,
      ticket: state.checkout.booked,
   };
};
export default connect(mapStateToProps)(index);
