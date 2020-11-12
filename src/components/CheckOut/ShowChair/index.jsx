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
            {daDat ? (
               <button
                  className="btn text-secondary disabled"
                  onClick={() => {
                     alert("Ghế đã đặt vui lòng chọn ghế khác!!");
                  }}
               >
                  <i className="fas fa-couch"></i>
               </button>
            ) : (
               <button
                  className={`btn ${
                     this.state.isBooking
                        ? "text-success"
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
                  }}
               >
                  <i className="fas fa-couch"></i>
               </button>
            )}
         </div>
      );
   }
}
export default connect()(index);
