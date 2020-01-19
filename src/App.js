import React, {useState, useEffect} from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import HeaderComponent from "./components/header/header.component";
import HomepageComponent from './pages/homepage/homepage.component';
import ShopComponent from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.page";
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import './App.css';


function App() {
  // eslint-disable-next-line
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    let unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else {
        setCurrentUser({});
      }
    });
    return () => unsubscribeFromAuth();
  }, [currentUser.id]); // todo fix linter warning

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
