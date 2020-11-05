import React, { Component } from "react";
import { connect } from "react-redux";
import LazyLoad from "../LazyLoad";
class index extends Component {
   renderChairList = () => {
      return this.props.checkoutInfo.danhSachGhe.map((item, index) => {
         return (
            <button className="btn btn-primary m-2" key={index}>
               {item.tenGhe}
            </button>
         );
      });
   };
   render() {
      const { thongTinPhim, danhSachGhe } = this.props.checkoutInfo;
      //   console.log(danhSachGhe);
      return thongTinPhim && danhSachGhe ? (
         <div className="row m-0">
            <div className="col-sm-3 p-0 mr-2">
               <img
                  src={thongTinPhim.hinhAnh}
                  alt=""
                  width="100%"
                  height="100%"
               />
            </div>
            <div className="col-sm-5">
               <div className="text-center my-4 border-bottom">
                  <h5>{thongTinPhim.tenCumRap}</h5>
                  <span> {thongTinPhim.tenRap} </span>&ensp;|&ensp;
                  <span>{thongTinPhim.gioChieu}</span>
               </div>
               <div className="row">{this.renderChairList()}</div>
            </div>
            <div className="col-sm-4"></div>
         </div>
      ) : (
         <LazyLoad></LazyLoad>
      );
   }
}
const mapStateToProps = (state) => {
   return {
      logo: state.cinema.cinemaSystemLogo,
      checkoutInfo: state.checkout.checkoutInfo,
   };
};
export default connect(mapStateToProps)(index);
