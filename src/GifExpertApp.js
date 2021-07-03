import React, { useState } from 'react';
import { Fragment } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import PropTypes from 'prop-types';

export const GifExpertApp = ({ defaultCategories = [] }) => {


    const [categories, setCategories] = useState(defaultCategories);

    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map((category) =>
                        <GifGrid
                            category={category}
                            key={category}
                        />)
                }
            </ol>
        </Fragment>
    )
}

GifExpertApp.propTypes = {
    defaultCategories: PropTypes.arrayOf(String).isRequired
}