import React from 'react';

export default function PizzaForm(props) {
    return (
        <div>
            <h2>Build Your Own Pizza</h2>
            <form id='pizza-form'>
                <label>Name
                    <input 
                        type='text'
                        name='name-input'
                    />
                </label>
                <label>Choose a Size
                    <select
                        name='size-dropdown'
                    >
                        <option value=''>Select an option</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                </label>
            </form>
        </div>
    )
}