import React, { useState } from "react";
import { Route, Link, Switch } from 'react-router-dom';

import Home from "./components/Home";
import PizzaForm from "./components/Form";

import axios from 'axios';

const initialFormValues = {
  name: '',
  size: '',
  sauce: '',
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false,
  special: '',
}

const initialOrders = [];
const initialDisabled = true;

const App = () => {
  const [orders, setOrders] = useState(initialOrders)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewOrder = newOrder => {
    axios.post(`https://reqres.in/api/orders`, newOrder)
    .then(res => {
      setOrders([res.data, ...orders]);
      setFormValues(initialFormValues);
    }).catch(err => {
      console.error(err);
      setFormValues(initialFormValues);
    })
  }
  
  const inputChange = (name, value) => {
    setFormValues({
      ...formValues, [name]: value
    })
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      sauce: formValues.sauce,
      topping1: formValues.topping1,
      topping2: formValues.topping2,
      topping3: formValues.topping3,
      topping4: formValues.topping4,
      special: formValues.special
    }
    postNewOrder(newOrder);
  }
  return (
    <>
      <nav>
        <h1>Lambda Eats</h1>
        <Link to='/'>Home</Link>
        <Link to='/pizza'>Pizza</Link>
      </nav>

      <Switch>
        <Route path='/pizza'>
          <PizzaForm 
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
          />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </>
  );
};
export default App;
