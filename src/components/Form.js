import React from 'react';

export default function PizzaForm(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors
    } = props;

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    return (
        <div>
            <h2>Build Your Own Pizza</h2>
            <form id='pizza-form' onSubmit={onSubmit}>
                <div>
                    <h3>Your info</h3>
                    <label>Name
                    <input 
                        type='text'
                        name='name'
                        id='name-input'
                        value={values.name}
                        onChange={onChange}
                    />
                    </label>
                    <div>{errors.name}</div>
                </div>
                <div>
                    <h3>Choice of Size</h3>
                    <label>Size
                        <select
                            name='size'
                            id='size-dropdown'
                            value={values.size}
                            onChange={onChange}
                        >
                            <option value=''>Select an option</option>
                            <option value='small'>Small</option>
                            <option value='medium'>Medium</option>
                            <option value='large'>Large</option>
                        </select>
                    </label>
                    <div>{errors.size}</div>
                </div>
                <div>
                    <h3>Choice of Sauce</h3>
                    <label>Original Red
                        <input
                            type='radio'
                            name='sauce'
                            value='red'
                            onChange={onChange}
                            checked={values.sauce === 'red'}
                        />
                    </label>
                    <label>Garlic Ranch
                        <input
                            type='radio'
                            name='sauce'
                            value='garlic'
                            onChange={onChange}
                            checked={values.sauce === 'garlic'}
                        />
                    </label>
                    <div>{errors.sauce}</div>
                </div>
                <div>
                    <h3>Add Toppings</h3>
                    <label>Pepperoni
                        <input 
                            type='checkbox'
                            name='topping1'
                            checked={values.topping1}
                            onChange={onChange}
                        />
                    </label>
                    <label>Italian Sausage
                        <input
                            type='checkbox'
                            name='topping2'
                            checked={values.topping2}
                            onChange={onChange}
                        />
                    </label>
                    <label>Bell Pepper
                        <input
                            type='checkbox'
                            name='topping3'
                            checked={values.topping3}
                            onChange={onChange}
                        />
                    </label>
                    <label>Hot Peppers
                        <input
                            type='checkbox'
                            name='topping4'
                            checked={values.topping4}
                            onChange={onChange}
                        />
                    </label>
                </div>
                <div>
                    <h3>Special Instructions</h3>
                    <input
                        type='text'
                        name='special'
                        id='special-text'
                        value={values.special}
                        onChange={onChange}
                    />
                </div>
                <button disabled={disabled} id='order-button'>Submit Order
                </button>
            </form>
        </div>
    )
}