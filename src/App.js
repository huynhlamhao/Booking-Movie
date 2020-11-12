import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"; //ho tro chia page cho ung dung

// import Home from "../src/pages/home";
import DetailMovie from "../src/pages/detailMovie";
import CheckOut from "./pages/checkout";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import LazyLoad from "../src/components/LazyLoad";
import { SET_TOKEN } from "./redux/types/type";
import { creactAction } from "./redux/actions/";
import { connect } from "react-redux";
const Home = lazy(() => import("../src/pages/home"));

class App extends Component {
   render() {
      return (
         <BrowserRouter>
            <Switch>
               <Route exact path="/detail/:movieId" component={DetailMovie} />

               <Route exact path="/checkout/:checkoutId" component={CheckOut} />
               <Route exact path="/signup/" component={SignUp} />
               <Route exact path="/signin/" component={SignIn} />
               <Suspense fallback={<LazyLoad></LazyLoad>}>
                  <Route exact path="/" component={Home} />
               </Suspense>
            </Switch>
         </BrowserRouter>
      );
   }
   componentDidMount() {
      const token = JSON.parse(localStorage.getItem("userInfo"));

      if (token) {
         // console.log("hahaha");
         this.props.dispatch(creactAction(SET_TOKEN, token));
      }
   }
}

export default connect()(App);
