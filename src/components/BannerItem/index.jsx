import React, { Component } from "react";
import "./style.css";

// import Carousel from "react-bootstrap/Carousel";
class index extends Component {
   render() {
      // const index = "first";

      const { HinhAnh, TraiLer } = this.props.item;

      return (
         //    <Carousel.Item
         //       className={`${this.props.index === index ? "active" : ""}`}
         //    >
         //       <img className="d-block w-100" src={HinhAnh} alt={TenPhim} />
         //       <Carousel.Caption>
         //          <h3>{TenPhim}</h3>
         //          <p>{MoTa}</p>
         //       </Carousel.Caption>
         //    </Carousel.Item>
         // );
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
                  className="venobox play-trailer"
                  data-autoplay="true"
                  data-vbtype="video"
                  href={TraiLer}
               >
                  <img
                     src="https://tix.vn/app/assets/img/icons/play-video.png"
                     alt=""
                  />
               </a>
            </div>
         </div>
      );
   }
}

export default index;
