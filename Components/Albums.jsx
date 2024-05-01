import useFetch from "../Hooks/FetchApi";

import React from 'react';

const Albums= () => {
    const {data,loading} = useFetch("https://api.deezer.com/album/302127")

    if(loading) {
        return <h1>Loading...</h1>
    }
    return (
        <div>
            <h1>Albums</h1>
            {
                data.results.map((album)=>{
                    return (
                        <div key={album.id}>
                        <div>{album.title}</div>
                        <div>{album.share}</div>
                        <div>{album.upc}</div>
                        <div>{album.cover}</div>
                        <div>{album.label}</div>
                        <div>{album.artist}</div>
                        </div>
                        
                    )
                })
            }
        </div>
    );
};

export default Albums;