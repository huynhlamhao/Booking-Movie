import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DetailItem from "../../components/Detail/DetailItem";
import { fetchMovieDetail } from "../../redux/actions/movieDetail";

import { connect } from "react-redux";
import { fetchCinemas } from "../../redux/actions/cinemaList";
class index extends Component {
   render() {
      return (
         <div>
            <Header></Header>
            <DetailItem item={this.props.detailItem}></DetailItem>
            <Footer></Footer>
         </div>
      );
   }
   componentDidMount = () => {
      this.props.dispatch(fetchMovieDetail(this.props.match.params.movieId));
      // this.props.dispatch(fetchMoives);
      this.props.dispatch(fetchCinemas);
   };
}
const mapStateToProps = (state) => {
   return {
      detailItem: state.movie.detailItem,
   };
};
export default connect(mapStateToProps)(index);
