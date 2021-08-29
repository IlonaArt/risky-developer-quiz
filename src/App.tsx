import React from 'react';
import './App.css';
import StartPage from './StartPage';
import QuestionPage from  './QuestionPage';
import ResultPage from './ResultPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export const onClick = (data: string): boolean => {
  return true;
}

function App() {
  return (
    <Router>
      <div className="app">
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact>
            <StartPage />
          </Route>
          <Route path="/question/:id">
            <QuestionPage />
          </Route>
          <Route path="/result">
            <ResultPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
