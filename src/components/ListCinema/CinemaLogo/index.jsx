import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCinemasList } from "../../../redux/actions/cinema";

class index extends Component {
   handleHeThongRap = (e) => {
      this.props.dispatch(fetchCinemasList(e.target.id));
   };

   render() {
      // console.log(this.props.logo);
      return (
         <a
            className={`cinema__logo ${this.props.stt === 0 ? "active" : ""}`}
            id="v-pills-home-tab"
            data-toggle="pill"
            href={`#${this.props.logo.maHeThongRap}`}
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
            onClick={this.handleHeThongRap}
         >
            <img
               src={this.props.logo.logo}
               id={this.props.logo.maHeThongRap}
               alt=""
               className="w-100"
            />
         </a>
      );
   }
}

export default connect()(index);
