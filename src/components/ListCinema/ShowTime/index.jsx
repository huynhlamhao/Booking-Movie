import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCheckOut } from "../../../redux/actions/checkout";
import "./style.css";
class index extends PureComponent {
   constructor(props) {
      super(props);
      this.state = { today: "2019-01-01" };
   }

   render() {
      // console.log(this.props.item);
      const { tenPhim, hinhAnh, lstLichChieuTheoPhim } = this.props.item;
      const movieTimeList = lstLichChieuTheoPhim.filter((item) => {
         return item.ngayChieuGioChieu.substr(0, 10) === this.state.today;
      });
      // console.log("movieTimeList", movieTimeList.length);
      return movieTimeList.length !== 0 ? (
         <div className="tab-content border" id="v-pills-tabContent">
            <div className="movieInfo my-2 ml-3">
               <img src={hinhAnh} alt="" width="50px" height="50px" />

               <span className="badge badge-danger ml-2 mr-1">C18</span>
               <span>
                  <strong>{tenPhim}</strong>
               </span>
            </div>

            <div className="movieTime text-left">
               {movieTimeList.map((item, index) => {
                  // console.log("item:", item);
                  return (
                     <Link
                        to={`/checkout/${item.maLichChieu}`}
                        key={index}
                        className="btn movieTimeBtn"
                        onClick={() => {
                           this.props.dispatch(fetchCheckOut(item.maLichChieu));
                        }}
                     >
                        {item.ngayChieuGioChieu.substr(11, 5)}
                     </Link>
                  );
               })}
            </div>
         </div>
      ) : (
         ""
      );
   }
}
export default connect()(index);
