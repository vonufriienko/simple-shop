import React, {useState, useEffect} from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import HeaderComponent from "./components/header/header.component";
import HomepageComponent from './pages/homepage/homepage.component';
import ShopComponent from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.page";
import {auth} from './firebase/firebase.utils';
import './App.css';


function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    let unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      // console.log(user.displayName);
    });
    return () => unsubscribeFromAuth();
  });

  return (
    <div>
      <HeaderComponent currentUser={currentUser}/>
      <Switch>
        <Route exact path='/' component={HomepageComponent}/>
        <Route path='/shop' component={ShopComponent}/>
        <Route path='/signin' component={SignInAndSignUpPage}/>
      </Switch>
    </div>

  );
}

export default App;
