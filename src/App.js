import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from './components/header';
import Main from './pages/main';
import Favorites from './pages/favorites';

function App() {
  const state = useSelector((state) => state);
  const { darkMode } = state;

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <Header />
      <Switch>
        <Route exact path='/my-besties' component={Favorites} />
        <Route path='/:id?' render={({ match }) => <Main match={match} />} />
      </Switch>
    </div>
  );
}

export default App;
