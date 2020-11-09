import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSelectedChair } from "../../../redux/actions/selectedChair";
class index extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isBooking: false,
      };
   }
   render() {
      // console.log(this.props.chair);
      const { loaiGhe, daDat } = this.props.chair;
      return (
         <div className="col-sm-1 ">
            <button
               className={`btn ${
                  this.state.isBooking
                     ? "text-success"
                     : "text-primary" && daDat
                     ? "text-secondary disabled"
                     : "text-primary" && loaiGhe === "Thuong"
                     ? "text-primary"
                     : "text-warning"
               }`}
               //
               onClick={() => {
                  this.setState({
                     ...this.state.isBooking,
                     isBooking: !this.state.isBooking,
                  });
                  this.props.dispatch(fetchSelectedChair(this.props.chair));
                  // console.log(this.state.isBooking);
               }}
            >
               <i className="fas fa-couch"></i>
            </button>
         </div>
      );
   }
}
export default connect()(index);
