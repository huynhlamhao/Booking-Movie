import React, { Component, PureComponent } from "react";

export default class index extends PureComponent {
   render() {
      // console.log(this.props.item);
      const { tenPhim, hinhAnh, lstLichChieuTheoPhim } = this.props.item;
      const movieTimeList = lstLichChieuTheoPhim.filter((item) => {
         return item.ngayChieuGioChieu === "2019-01-01T10:10:00";
      });
      // console.log("movieTimeList", movieTimeList.length);
      return movieTimeList.length !== 0 ? (
         <div className="tab-content border" id="v-pills-tabContent">
            <div className="movieInfo mb-4 mt-2 ml-3">
               <img src={hinhAnh} alt="" width="50px" height="50px" />

               <span className="badge badge-danger ml-2 mr-1">C18</span>
               <span>
                  <strong>{tenPhim}</strong>
               </span>
            </div>

            <div className="movieTime">
               {movieTimeList.map((item, index) => {
                  return <button>{item.ngayChieuGioChieu}</button>;
               })}
            </div>
         </div>
      ) : (
         ""
      );
   }
}
