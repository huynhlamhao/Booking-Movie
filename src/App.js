import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"; //ho tro chia page cho ung dung

// import Home from "../src/pages/home";
import DetailMovie from "../src/pages/detailMovie";
import CheckOut from "./pages/checkout";
import LazyLoad from "../src/components/LazyLoad";

const Home = lazy(() => import("../src/pages/home"));

function App() {
   return (
      <BrowserRouter>
         <Switch>
            <Route exact path="/detail/:movieId" component={DetailMovie} />

            <Route exact path="/checkout/:checkoutId" component={CheckOut} />
            <Suspense fallback={<LazyLoad></LazyLoad>}>
               <Route exact path="/" component={Home} />
            </Suspense>
         </Switch>
      </BrowserRouter>
   );
}

export default App;
