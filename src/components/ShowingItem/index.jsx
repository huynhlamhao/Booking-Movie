import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
export default class index extends Component {
   render() {
      // console.log("movie", this.props.movie);
      const { maPhim, tenPhim, hinhAnh, trailer, danhGia } = this.props.movie;
      return (
         <div className="card mt-5 mx-2">
            <img className="card-img showimg" src={hinhAnh} alt="" />

            <div className="film__info">
               <div className="film__name">
                  <h6>
                     <span className="badge badge-danger mr-2">C18</span>
                     {tenPhim}
                  </h6>
               </div>
            </div>
            <span className="film__rate">
               <p className="rate__point">{danhGia}</p>
               <div className="rate__star">
                  {danhGia >= 5 && danhGia < 7 ? (
                     <>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half"></i>
                     </>
                  ) : (
                       <>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                       </>
                    ) && danhGia <= 7 ? (
                     <>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half"></i>
                     </>
                  ) : (
                     <>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                     </>
                  )}
               </div>
            </span>
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
               <Link
                  to={`/detail/${maPhim}`}
                  className="btn btn-danger btnOverlay"
               >
                  Đặt vé
               </Link>
            </div>
         </div>
      );
   }
}
