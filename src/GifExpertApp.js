import React, { useState } from 'react';
import { Fragment } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {


    const initialState = ['Dragon Ball'];
    const [categories, setCategories] = useState(initialState);

    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories} />
            <hr />

            <ol>
                {
                    categories.map((item) => <li key={item}>{item}</li>)
                }
            </ol>
        </Fragment>
    )
}