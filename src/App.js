import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import dummyStore from './dummy-store.js';
import HomePage from './pages/HomePage.js';
import FolderPage from './pages/FolderPage.js';
// import UserPage from './pages/UserPage';


export default function App() {

  // State Variables
  const [data, setData] = useState(dummyStore);
  const [currentFolder, setCurrentFolder] = useState('');


  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route
        exact path='/folder'
        render={(props) => <FolderPage {...props} folders={data.folders} />}
      />
    </Switch>
  );
}