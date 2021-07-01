import React, { useState } from 'react';
import { Fragment } from 'react';

export const GifExpertApp = () => {

    /* const categories = ['One Punch', 'Samurai X', 'Dragon Ball']; */

    const initialState = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(initialState);

    const handleAdd = () => {
        const category = 'Pokemon';
        setCategories((state) => [...state, category]);
    }

    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <hr />

            <button onClick={handleAdd}>Add New</button>
            <ol>
                {
                    categories.map((item) => <li key={item}>{item}</li>)
                }
            </ol>
        </Fragment>
    )
}