import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./shared/components/header";
import Footer from "./shared/components/footer";
import HomePage from "./pages/home/home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CustomerListPage from "./pages/customer-list/page";
import CustomerDetailsPage from "./pages/customer-details/page";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact={true}>
          <HomePage />
        </Route>
        <Route path="/customer/list" exact={true}>
          <CustomerListPage />
        </Route>
        <Route path="/customer/new" exact={true}>
          <CustomerDetailsPage />
        </Route>
        <Route path="/customer/editor/:id" exact={true}>
          <CustomerDetailsPage />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
