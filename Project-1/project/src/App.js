import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StartPage from './StartPage';
import PaperGroupContest from './PaperGroupContest';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={StartPage} />
        <Route path="/contest" component={PaperGroupContest} />
      </Switch>
    </Router>
  );
}

export default App;
