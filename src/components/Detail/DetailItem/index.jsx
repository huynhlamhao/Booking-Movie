import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.css";
class index extends Component {
   render() {
      const {
         tenPhim,
         hinhAnh,
         trailer,
         ngayKhoiChieu,
      } = this.props.detailItem;
      console.log("tenphim", this.props.detailItem);
      return (
         <div className="detail">
            <img src={hinhAnh} alt="" className="blurImg" />
            <div className="container movieDetailInfo">
               <div className="row w-75">
                  <div className="col-sm-4">
                     <div className="card border-0 ">
                        <img
                           className="card-img-top"
                           src={hinhAnh}
                           alt={tenPhim}
                        />
                        <div className="film__overlay">
                           <a
                              className="venobox trailerimg"
                              data-autoplay="true"
                              data-vbtype="video"
                              href={trailer}
                           >
                              <img
                                 className="w-100"
                                 src="https://tix.vn/app/assets/img/icons/play-video.png"
                                 alt=""
                              />
                           </a>
                        </div>
                     </div>
                  </div>
                  <div className="col-sm-6 text-light">
                     <div className="detailNgayChieu">
                        <p className=" m-0">
                           <strong>{ngayKhoiChieu.substr(0, 10)}</strong>
                        </p>
                     </div>
                     <div className="detailTenPhim">
                        <h2>
                           <span className="badge badge-danger mr-2">C18</span>
                           {tenPhim}
                        </h2>
                     </div>
                     <p>100 phút - 0 IMDb - 2D/Digita</p>
                     <button className="btn btn-danger">Mua vé</button>
                  </div>
                  <div className="col-sm-2"></div>
               </div>
            </div>
         </div>
      );
   }
}
const mapStateToProps = (state) => {
   return {
      detailItem: state.movie.detailItem,
   };
};
export default connect(mapStateToProps)(index);
