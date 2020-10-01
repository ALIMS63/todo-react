import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import TableToDo from './components/TableToDo/TableToDo';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



function App() {
  return (
    <>
      <Router>
        <Navigation />
        <TableToDo />
        <Switch>

        </Switch>
      </Router>
    </>
  );
}

export default App;
