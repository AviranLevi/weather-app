import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from './components/header';
import Main from './pages/main';
import Favorites from './pages/favorites';
import Footer from './components/footer';

function App() {
  const state = useSelector((state) => state);
  const { darkMode } = state;

  return (
    <div className={`app center-items ${darkMode ? 'dark-mode' : ''}`}>
      <Header />
      <Switch>
        <Route exact path='/my-besties'>
          <Favorites />
        </Route>
        <Route path='/:id?'>
          <Main />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
