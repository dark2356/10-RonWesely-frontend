import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BulkPackageSale from "./Component/BulkPackageSale";
import Nav from "./Pages/Main/Nav/Nav";
import Main from "./Pages/Main/Main";
import Login from "./Pages/Member/Login";
import Product from "./Pages/Product/Product";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/bulkpackagesale" component={BulkPackageSale} />
          <Route exact path="/nav" component={Nav} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/product" component={Product} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
