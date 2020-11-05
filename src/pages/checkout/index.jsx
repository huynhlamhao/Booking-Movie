import React, { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LazyLoad from "../../components/LazyLoad";
import CheckOut from "../../components/CheckOut";
import { fetchCheckOut } from "../../redux/actions/checkout";
// const CheckOut = lazy(() => import("../../components/CheckOut"));

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
      console.log(this.state.isLoading);
      return (
         <div>
            <Header></Header>

            
            {this.state.isLoading ? (
               <CheckOut></CheckOut>
            ) : (
               <LazyLoad></LazyLoad>
            )}
            

            <Footer></Footer>
         </div>
      );
   }
   componentDidMount() {
      this.props.dispatch(fetchCheckOut(this.props.match.params.checkoutId));
      window.scrollTo(0, 0);
      this.handleLazy();
   }
}

export default connect()(index);
