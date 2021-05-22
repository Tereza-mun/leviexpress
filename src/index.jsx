import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
// import { Reservation } from './Reservation';
// import { Home } from './Home';
import './style.css';

const App = () => {
  return (
    // <Router>
    <div>
      <Header />

      {/* <Switch>
          <Route path="/reservation">
            <Reservation />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch> */}

      <Footer />
    </div>
    // </Router>
  );
};

render(<App />, document.querySelector('#app'));
