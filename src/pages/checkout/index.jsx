import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CheckOut from "../../components/CheckOut";
import { fetchCheckOut } from "../../redux/actions/checkout";
class index extends Component {
   render() {
      return (
         <div>
            <Header></Header>
            <CheckOut></CheckOut>
            <Footer></Footer>
         </div>
      );
   }
   componentDidMount() {
      this.props.dispatch(fetchCheckOut(this.props.match.params.checkoutId));
   }
}

export default connect()(index);
