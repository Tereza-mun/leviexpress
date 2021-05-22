import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Header } from './Header';
import { MainContent } from './MainContent';
import { Footer } from './Footer';
import './style.css';

const App = () => {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
};

render(<App />, document.querySelector('#app'));
