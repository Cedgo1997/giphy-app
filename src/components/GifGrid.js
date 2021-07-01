import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    useEffect(() => {
        getGifs();
    }, []);

    const [images, setImages] = useState([]);

    const getGifs = async () => {
        const apiKey = 'EfiDDliYy1sKOtC0ePfLVayOWsFVNM9x';
        const url = `https://api.giphy.com/v1/gifs/search?q=rick&limit=10&api_key=${apiKey}`;
        const resp = await fetch(url);
        const { data } = await resp.json();
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });
        setImages(gifs);
    }

    return (
        <div>
            <h3>{category}</h3>
            <ol>
                {images.map((img) => 
                        <GifGridItem
                            img = {img}
                            {...img}
                        />)}
            </ol>
        </div>
    )
}
