import React from "react";
import { BrowserRouter, Route } from "react-router-dom"; //ho tro chia page cho ung dung

import Home from "../src/pages/home";
import DetailMovie from "../src/pages/detailMovie";
import CheckOut from "./pages/checkout";
function App() {
   return (
      <BrowserRouter>
         <div>
            <Route exact path="/home" component={Home} />

            <Route exact path="/detail/:movieId" component={DetailMovie} />
            <Route exact path="/checkout/:checkoutId" component={CheckOut} />
            <Route exact path="/" component={Home} />
         </div>
      </BrowserRouter>
   );
}

export default App;
