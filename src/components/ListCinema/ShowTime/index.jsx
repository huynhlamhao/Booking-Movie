import React, { Component } from "react";

export default class index extends Component {
   renderShowTime() {
      return this.props.item.lstCumRap.map((item, index) => {
         return (
            <div
               className="tab-pane fade show active"
               id={item.maCumRap}
               role="tabpanel"
               aria-labelledby="pills-profile-tab"
               key={index}
            >
               {index}
            </div>
         );
      });
   }
   render() {
      return (
         <div>
            <div className="tab-content" id="v-pills-tabContent">
               {this.renderShowTime()}
            </div>
         </div>
      );
   }
}
