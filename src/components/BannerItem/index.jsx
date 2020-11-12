import React, { Component } from "react";
import "./style.css";

// import Carousel from "react-bootstrap/Carousel";
class index extends Component {
   render() {
      // const index = "first";

      const { HinhAnh, TraiLer } = this.props.item;

      return (
         <div
            className={`carousel-item ${
               this.props.index === 0 ? "active" : ""
            }`}
         >
            <img
               data-src={HinhAnh}
               src={HinhAnh}
               alt="First slide"
               className="w-100"
            />
            <div className="carousel-overlay">
               <a
                  class="btn btn-danger venoboxvid btn-lg vbox-item"
                  data-gall="gall-video"
                  data-autoplay="true"
                  data-vbtype="video"
                  href={TraiLer}
               >
                  ytb
                  <img
                     src="https://tix.vn/app/assets/img/icons/play-video.png"
                     alt="playIcon"
                  />
               </a>
               {/* <a
                  className="venobox_custom play-trailer"
                  data-autoplay="true"
                  data-vbtype="video"
                  href={TraiLer}
               >
                  <img
                     src="https://tix.vn/app/assets/img/icons/play-video.png"
                     alt="playIcon"
                  />
               </a> */}
            </div>
         </div>
      );
   }
}

export default index;
