import useFetch from "../Hooks/FetchApi";

import React from 'react';

const Artists = () => {
    const {data,loading} = useFetch("https://api.deezer.com/artist/27")

    if(loading) {
        return <h1>Loading...</h1>
    }
    return (
        <div>
            <h1>Artists</h1>
            {
                data.results.map((artist)=>{
                    return (
                        <div key={artist.id}>
                        <div>{artist.name}</div>
                        <div>{artist.share}</div>
                        </div>
                        
                    )
                })
            }
        </div>
    );
};

export default Artists;