import React, { useState } from 'react';
import { Fragment } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {


    const initialState = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(initialState);

/*     const handleAdd = () => {
        const category = 'Pokemon';
        setCategories((state) => [...state, category]);
    }; */

    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory />
            <hr />

            <ol>
                {
                    categories.map((item) => <li key={item}>{item}</li>)
                }
            </ol>
        </Fragment>
    )
}