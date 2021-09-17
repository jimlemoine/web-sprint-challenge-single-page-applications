import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Home() {
    const history = useHistory();
    const routeToPizza = () => {
        history.push('/pizza');
    }

    return (
        <div>
            <button
                onClick={routeToPizza}
                id='order-pizza'
            >
                Pizza?
            </button>
        </div>
    )
}