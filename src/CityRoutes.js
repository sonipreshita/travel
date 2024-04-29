import React from 'react';
// import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainHome from './Components/MainHome';
import AppStore from './Components/AppStore';

export default function CityRoutes() {

  return(
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={MainHome} />
      <Route  exact path="/cities/mumbai" component={MainHome} />
      <Route exact path="/cities/indore" component={MainHome} />
      <Route exact path="/cities/ahmedabad" component={MainHome} />
      <Route  exact path="/cities/gandhinagar" component={MainHome} />
      <Route exact path="/cities/pune" component={MainHome} />
      <Route  exact path="/cities/delhi" component={MainHome} />
      <Route exact path="/cities/banglore" component={MainHome} />
      <Route exact path="/cities/darjiling" component={MainHome} />
      <Route exact path="/cities/udaipur" component={MainHome} />
      <Route exact path="/app" component={AppStore} />
      </Switch>
  </BrowserRouter>
)};

