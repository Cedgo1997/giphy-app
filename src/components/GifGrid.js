import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs.helper';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    useEffect(() => {
        getGifs(category).then(setImages)
    }, [category]);

    const [images, setImages] = useState([]);

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
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
