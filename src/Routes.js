import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Footer from "./Component/Footer/Footer";
import BulkPackageSale from "./Component/BulkPackageSale/BulkPackageSale";
import Mypage from "./Pages/Member/Mypage/Mypage";
import Nav from "./Component/Nav/Nav";
import BulkPackageSale from "./Pages/BulkPackageSale/BulkPackageSale";
import SignUp from "./Pages/Member/Signup";
import Login from "./Pages/Member/Login";
import Product from "./Pages/Product/Product";
import Payment from "./Pages/Main/Payment/Payment";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/nav" component={Nav} />
          <Route exact path="/bulkpackagesale" component={BulkPackageSale} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/product/:id" component={Product} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/mypage" component={Mypage} />
          <Route exact path="/payment" component={Payment} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
