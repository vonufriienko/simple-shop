import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import HomepageComponent from './pages/homepage/homepage.component';
import ShopComponent from "./pages/shop/shop.component";
import './App.css';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomepageComponent}/>
        <Route  path='/shop' component={ShopComponent}/>
      </Switch>
    </div>

  );
}

export default App;
