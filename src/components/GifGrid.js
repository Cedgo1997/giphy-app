import React from 'react'
import { useFetchGifs } from './../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className="card-grid animate__animated animate__fadeIn animate__delay-1s">{category}</h3>
            {loading && <p>Loading</p>}
            <div className="card-grid animate__animated animate__fadeIn animate__delay-1s">
                <ul>

                    {images.map((img) =>
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />)}
                </ul>
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
