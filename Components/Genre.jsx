import useFetch from "../Hooks/FetchApi";

import React from 'react';

const Genres = () => {
    const {data,loading} = useFetch("https://api.deezer.com/genre/0")

    if(loading) {
        return <h1>Loading...</h1>
    }
    return (
        <div>
            <h1>Genres</h1>
            {
                data.results.map((genre)=>{
                    return (
                        <div key={genre.id}>
                        <div>{genre.name}</div>
                        <div>{genre.picture}</div>
                        </div>
                        
                    )
                })
            }
        </div>
    );
};

export default Genres;