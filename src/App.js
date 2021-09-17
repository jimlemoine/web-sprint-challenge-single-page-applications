import React from "react";
import { Route, Link, Switch } from 'react-router-dom';

import Home from "./components/Home";
import PizzaForm from "./components/Form";

const App = () => {
  return (
    <>
      <nav>
        <h1>Lambda Eats</h1>
        <Link to='/'>Home</Link>
        <Link to='/pizza'>Pizza</Link>
      </nav>

      <Switch>
        <Route path='/pizza'>
          <PizzaForm />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </>
  );
};
export default App;
