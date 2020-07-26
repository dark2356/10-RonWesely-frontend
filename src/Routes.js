import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Pages/Main/Nav/Nav";
import Main from "./Pages/Main/Main";
import Footer from "./Component/Footer/Footer";
import BulkPackageSale from "./Component/BulkPackageSale/BulkPackageSale";
import ShaveAni from "./Component/ShaveAni/ShaveAni";
import Login from "./Pages/Member/Login";
import Signup from "./Pages/Member/Signup";
import Product from "./Pages/Product/Product";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/nav" component={Nav} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/footer" component={Footer} />
          <Route exact path="/bulkpackagesale" component={BulkPackageSale} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/shaveani" component={ShaveAni} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
