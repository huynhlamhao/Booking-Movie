import React, { Component } from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Showing from "../../components/Showing";
import ListCinema from "../../components/ListCinema";
import News from "../../components/News";
import AppDownload from "../../components/AppDownload";
import { fetchMoives } from "../../redux/actions/movieList";
import { connect } from "react-redux";
import { fetchCinemas } from "../../redux/actions/cinemaList";
// import { fetchCinemasList } from "../../redux/actions/cinema";

class index extends Component {
   render() {
      return (
         <div>
            <Header></Header>

            <Banner></Banner>

            <Showing></Showing>

            <ListCinema></ListCinema>

            <News></News>
            <AppDownload></AppDownload>
            <Footer></Footer>
         </div>
      );
   }

   componentDidMount() {
      this.props.dispatch(fetchMoives);
      this.props.dispatch(fetchCinemas);
   }
}

export default connect()(index);
