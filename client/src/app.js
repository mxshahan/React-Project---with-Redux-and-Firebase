import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter, {history} from './routes/Router';
import configureStore from './store/configStore'; //REDUX STORE
import './theme/Settings' // CSS and Other Stuff
import {firebase} from './config/firebase';
import {LoginUser, LogoutUser} from './actions/auth';

const store = configureStore()

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
)

render(<h1 className="text-center">Loading...</h1>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if(user){
    if(history.location.pathname === '/login'){
      history.push('/');
    }
    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    }
    store.dispatch(LoginUser(userData));    
    render(jsx, document.getElementById('app'));

  }else{
    store.dispatch(LogoutUser())
    render(jsx, document.getElementById('app'));    
    console.log("Logged Out")
  }
})