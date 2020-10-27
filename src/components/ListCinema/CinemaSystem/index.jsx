import React, { Component, PureComponent } from "react";
import { connect } from "react-redux";
import { fetchCinemasShowTime } from "../../../redux/actions/cinemaShowTime";
import "./style.css";
class index extends PureComponent {
   renderCinemaSystem() {
      return this.props.item.lstCumRap.map((item, index) => {
         return (
            <div
               className="tab-pane fade show active"
               id={item.tenCumRap}
               role="tabpanel"
               aria-labelledby="v-pills-home-tab"
               key={index}
            >
               <button
                  className="btn btn-light w-100"
                  onClick={(e) => {
                     console.log(item.maCumRap);

                     this.props.dispatch(fetchCinemasShowTime(item.maCumRap));
                  }}
               >
                  <div className="row">
                     <div className="col-3">
                        <img
                           src={item.hinhAnh}
                           width="20px"
                           height="20px"
                           alt=""
                        />
                     </div>
                     <div className="col-9 text-left">
                        <span className="cinemaNameColor">
                           {item.tenCumRap.slice(
                              0,
                              item.tenCumRap.indexOf(" ")
                           )}
                        </span>
                        <strong>
                           {item.tenCumRap.slice(item.tenCumRap.indexOf("-"))}
                        </strong>
                        <p>{item.diaChi}</p>
                     </div>
                  </div>
               </button>
            </div>
         );
      });
   }
   render() {
      return <div>{this.renderCinemaSystem()}</div>;
   }
   componentDidMount() {
      this.props.dispatch(
         fetchCinemasShowTime(this.props.item.lstCumRap[0].maCumRap)
      );
   }
}
export default connect()(index);
