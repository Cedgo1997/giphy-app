import React, { useState } from 'react';
import { Fragment } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

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
                    categories.map((category) => 
                        <GifGrid 
                            category = {category} 
                            key={category}
                        />)
                }
            </ol>
        </Fragment>
    )
}