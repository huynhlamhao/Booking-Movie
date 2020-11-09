import React, { Component } from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Showing from "../../components/Showing";
import ListCinema from "../../components/ListCinema";
import News from "../../components/News";
import AppDownload from "../../components/AppDownload";
import LazyLoad from "../../components/LazyLoad";
import SignUp from "../SignUp";
import { fetchMoives } from "../../redux/actions/movieList";
import { connect } from "react-redux";
import { fetchCinemas } from "../../redux/actions/cinemaList";
import "./style.css";
// import { fetchCinemasList } from "../../redux/actions/cinema";

class index extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isLoading: false,
      };
   }
   handleLazy() {
      return new Promise((resolve) => {
         setTimeout(() => resolve(this.setState({ isLoading: true })), 1000);
      });
   }
   render() {
      return (
         <div>
            <div className={`${this.props.cinemaList ? "" : "overlay"}`}>
               <Header></Header>

               {this.state.isLoading ? (
                  <>
                     <Banner></Banner>

                     <Showing></Showing>

                     <ListCinema></ListCinema>

                     <News></News>

                     <AppDownload></AppDownload>

                     <Footer></Footer>
                  </>
               ) : (
                  <LazyLoad></LazyLoad>
               )}
            </div>
         </div>
      );
   }

   componentDidMount() {
      this.props.dispatch(fetchMoives);
      this.props.dispatch(fetchCinemas);
      this.handleLazy();
   }
}

const mapStateToProps = (state) => {
   return {
      cinemaList: state.cinema.listCinemas,
      listMovie: state.movie.movieList,
   };
};
export default connect(mapStateToProps)(index);
