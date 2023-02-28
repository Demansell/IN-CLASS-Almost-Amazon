import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import { getBooks } from '../api/bookData';
import { showBooks } from '../pages/books';

const startApp = (user) => {
  domBuilder(user); // BUILD THE DOM // ADD USER SO THAT YOU CAN UPDATE CALL
  domEvents(user); // ADD THE EVENT LISTENTERS TO THE DOM // ADD USER SO THAT YOU CAN UPDATE CALL
  formEvents(user); // ADD FORM EVENT LISTENTERS TO THE DOM // ADD USER SO THAT YOU CAN UPDATE CALL
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(user); // ATTACH THE EVENT LISTENERS TO THE NAVBAR

  // TODO: Put all books on the DOM on App load
  getBooks(user.uid).then((books) => showBooks(books));
};

export default startApp;
