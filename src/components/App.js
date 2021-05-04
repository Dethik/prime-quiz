import React from 'react';
import Header from './Header';
import Signin from "./Signin";
import Signup from "./Signup";
import QuizList from './QuizList';
import QuizForm from './NewQuizForm';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/" component={QuizList} />
        <Route exact path="/new" component={QuizForm} />
      </Switch>
    </Router>
  );
}

export default App;