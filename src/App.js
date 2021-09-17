import React, { useEffect, useState } from "react";
import { Route, Link, Switch } from 'react-router-dom';

import Home from "./components/Home";
import PizzaForm from "./components/Form";

import axios from 'axios';
import schema from './validation/formSchema';
import * as yup from 'yup';

const initialFormValues = {
  name: '',
  size: '',
  special: '',
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false,
}

const initialFormErrors = {
  name: '',
  size: '',
  sauce: '',
}

const initialOrders = [];
const initialDisabled = true;

const App = () => {
  const [orders, setOrders] = useState(initialOrders)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
    .then(res => {
      console.log(res.data);
      setOrders([res.data, ...orders]);
      setFormValues(initialFormValues);
    }).catch(err => {
      console.error(err);
      setFormValues(initialFormValues);
    })
  }
  
  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: ''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues, [name]: value
    })
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      special: formValues.special,
      topping1: formValues.topping1,
      topping2: formValues.topping2,
      topping3: formValues.topping3,
      topping4: formValues.topping4,
    }
    postNewOrder(newOrder);
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

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
            errors={formErrors}
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
