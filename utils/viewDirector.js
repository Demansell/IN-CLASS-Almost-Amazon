import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/buttons/loginButton';
import startApp from './startApp';
import client from './client';

// This function is looking for anytime the Auth State Changes.
// In this app, this happens on 2 occasions:
// 1. When a user logs in, their auth state changes to logged in
// 2. When a user logs out, their auth state changes to logged out
// Inside of this function, we will determine what happens when a user logs in and what happens when they log out

const ViewDirectorBasedOnUserAuthStatus = () => {
  firebase.initializeApp(client);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      startApp(user);
    } else {
      // person is NOT logged in
      loginButton();
    }
  });
};

export default ViewDirectorBasedOnUserAuthStatus;
