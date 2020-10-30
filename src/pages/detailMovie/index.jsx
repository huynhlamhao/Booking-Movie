import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DetailItem from "../../components/Detail/DetailItem";
import { fetchMovieDetail } from "../../redux/actions/movieDetail";
import { connect } from "react-redux";
class index extends Component {
   render() {
      return (
         <div>
            <Header></Header>
            <DetailItem></DetailItem>
            <Footer></Footer>
         </div>
      );
   }
   componentDidMount = () => {
      this.props.dispatch(fetchMovieDetail(this.props.match.params.movieId));
   };
}
// const mapStateToProps = (state) => {
//    return {
//       detailItem: state.movie.detailItem,
//    };
// };
export default connect()(index);
