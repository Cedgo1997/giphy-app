import React, {useEffect} from 'react'

export const GifGrid = ({category}) => {

    useEffect( () => {
        getGifs();
    }, []);

    const getGifs = async () => {
        const apiKey = 'EfiDDliYy1sKOtC0ePfLVayOWsFVNM9x';
        const url = `https://api.giphy.com/v1/gifs/search?q=rick&limit=10&api_key=${apiKey}`;
        const resp = await fetch(url);
        const {data} = await resp.json();
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });
        console.log(gifs)
    }

    return (
        <div>
            <h3>{category}</h3>
        </div>
    )
}
