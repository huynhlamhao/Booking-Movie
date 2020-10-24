import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCinemasShowTime } from "../../../redux/actions/cinemaShowTime";

class index extends Component {
   handleCinemaSystem(e) {
      console.log("id", e.target.id);
      // this.props.dispatch(fetchCinemasShowTime(e.target.id));
   }
   renderCinemaSystem() {
      // console.log(this.props.item.lstCumRap);
      return this.props.item.lstCumRap.map((item, index) => {
         return (
            <div
               className="tab-pane fade show active"
               id={item.tenCumRap}
               role="tabpanel"
               aria-labelledby="v-pills-home-tab"
               key={index}
            >
               {/* <a
                  class="active"
                  id={item.maCumRap}
                  data-toggle="pill"
                  href={`#${item.maCumRap}`}
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="true"
                  onClick={this.handleCinemaSystem}
               ></a> */}
               <button
                  className="btn btn-dark"
                  onClick={this.handleCinemaSystem}
               >
                  <span id={item.maCumRap}>{item.tenCumRap}</span>
               </button>
            </div>
         );
      });
   }
   render() {
      return <div>{this.renderCinemaSystem()}</div>;
   }
}
export default connect()(index);
