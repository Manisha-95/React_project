import React, { useEffect, useState } from 'react';
//import axios from 'axios';

function MovieApi(props)
{
    const [Data,setData] = useState("");

    useEffect(()=>{
        fetch("https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-movies-byyear&page=1&year=2020", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
                "x-rapidapi-key": "6953d26895msh4f2baf46d64b1c4p1bf113jsn7b9a447eb5fd"
            }
        })
        .then(response => {
            console.log(response);
            setData(response)
        })
        .catch(err => {
            console.error(err);
        });
    },[props.inputvalue])
    
    return(
        <div><h1 style={{textAlign:'center'}}>Movie list of year <span>{props.inputvalue}</span></h1>
         {/* <ul>{Data.map((movie)=><li>{movie}</li>)}</ul> */}
        </div>
    )
}
export default MovieApi