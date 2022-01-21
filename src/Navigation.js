import { Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import React from "react";
import PageNotFound from "./pages/notfound/PageNotFound";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/SignUp";
import BookingRoom from "./pages/booking/BookingRoom";
import Account from "./pages/account/Account";
import Reservation from "./pages/account/Reservation";
import Dashboard from "./pages/dashboard/Dashboard";
import CartDetail from "./pages/booking/CartDetail";

export default function Navigation() {
  return (
    <Switch>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/account/info">
        <Account />
      </Route>
      <Route exact path="/account/reservation">
        <Reservation />
      </Route>
      <Route exact path="/hotel/:id">
        <Hotel />
      </Route>
      <Route exact path="/booking/:id">
        <BookingRoom />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
      <Route exact path="/cart/detail/:id">
        <CartDetail />
      </Route>
      {/* <Route path="/hotel/:id" render={(props) => <Hotel text="abc" {...props} />} /> */}
      <Route>
        <PageNotFound />
      </Route>
    </Switch>
  );
}
