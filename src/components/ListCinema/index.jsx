import React, { PureComponent } from "react";
import { connect } from "react-redux";
import CinemaLogo from "./CinemaLogo";
import CinemaSystem from "./CinemaSystem";
import ShowTime from "./ShowTime";
import "./style.css";
class index extends PureComponent {
   renderLogoCinema = () => {
      // console.log("logoCInema", this.props.cinemaLogoList);
      return this.props.cinemaLogoList.map((item, index) => {
         return <CinemaLogo logo={item} stt={index} key={index}></CinemaLogo>;
      });
   };
   renderCinemaList() {
      // console.log(this.props.cinemaList);
      return this.props.cinemaList.map((item, index) => {
         return (
            <CinemaSystem item={item} index={index} key={index}></CinemaSystem>
         );
      });
   }
   renderShowTime = () => {
      // console.log("showtime", this.props.cinemaShowTimes);
      return this.props.cinemaShowTimes.map((item, index) => {
         return <ShowTime item={item} index={index} key={index}></ShowTime>;
      });
   };
   render() {
      return (
         <div id="cinema" className="container my-5 bg-light">
            <h1 className="text-center">Hệ thống rạp và lịch chiếu</h1>
            <div className="row">
               <div className="col-1 border p-2">
                  <div
                     className="nav flex-column nav-pills"
                     id="v-pills-tab"
                     role="tablist"
                     aria-orientation="vertical"
                  >
                     {this.renderLogoCinema()}
                  </div>
               </div>
               <div className="col-4 border p-2 crollBar">
                  <div className="tab-content" id="v-pills-tabContent">
                     {this.renderCinemaList()}
                  </div>
               </div>
               <div className="col-7 p-0 crollBar">{this.renderShowTime()}</div>
            </div>
         </div>
      );
   }
}
const mapStateToProps = (state) => {
   return {
      cinemaLogoList: state.cinema.listCinemas,
      cinemaList: state.cinema.cinema,
      cinemaShowTimes: state.cinema.showTime,
   };
};
export default connect(mapStateToProps)(index);
